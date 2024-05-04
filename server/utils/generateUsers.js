const { generateName, generateAddress } = require('./faker.js');

const generateUser = (faker) => {
  const name = generateName(faker);
  const address = generateAddress(faker);

  return { ...name, ...address };
};


const generateNoErrorUser = (faker) => {
  const id = faker.string.uuid();
  const user = generateUser(faker);
  return { id, ...user };
};


module.exports = {
  generateNoErrorUser,
};