const { generateName, generateAddress, generatePhone } = require('./faker.js');
const ERR_CONVERT = 1000;
const generateUser = (faker, region) => {
  const name = generateName(faker);
  const address = generateAddress(faker);
  const phone = generatePhone(faker, region);

  return { ...name, ...address, phone };
};


const generateNoErrorUser = (faker, region) => {
  const id = faker.string.uuid();
  const user = generateUser(faker, region);
  return { id, ...user };
};


const generateUsers = (faker, batchSize, errorRate, region) => {
  const totalErr = Math.floor((errorRate / ERR_CONVERT) * batchSize);
  const users = [];

  try {
    const remainingBatchSize = batchSize - totalErr;
    const noErrorUsers = new Array(
      remainingBatchSize,
    ).fill().map(() => generateNoErrorUser(faker, region));
    users.push(...noErrorUsers);

    return users;
  } catch (error) {
    console.error('Error generating users:', error);
  }
};




module.exports = {
  generateUsers,
};