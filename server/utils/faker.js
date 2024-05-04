const {allFakers, faker} = require('@faker-js/faker');


const generateName = (faker) => {
  const firstName = faker.person.firstName()
  const middleName = faker.person.middleName()
  const lastName = faker.person.lastName()
  return { firstName, middleName, lastName };
};

const generateAddress = (faker) => {
  const city = faker.location.city()
  const street = faker.location.streetAddress()
  const country = faker.location.country()
  const zipCode = faker.location.zipCode()
  return {
    city, street, country, zipCode,
  };
};


const switchFakerRegion = (region) => allFakers[region] || faker;

module.exports = {
  generateName,
  generateAddress,
  switchFakerRegion,
};