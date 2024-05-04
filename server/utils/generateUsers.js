const { generateName, generateAddress, generatePhone } = require('./faker.js');

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


module.exports = {
  generateNoErrorUser,
};