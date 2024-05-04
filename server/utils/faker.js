const {allFakers, faker} = require('@faker-js/faker');


const PHONES = {
  en: '+44 1234 567890',
  en_US: '+1 123 456 7890',
  zh_CN: '+86 13512345678',
  en_CA: '+1 123 456 7890',
  en_IN: '+91 12345 67890',
  en_AU: '+61 2 1234 5678',
  en_IE: '+353 1 123 4567',
}


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

const generatePhone = (faker, region) => {
  const phone = PHONES[region];
  //console.log('phone', phone);
  const generatedPN = phone.replace(/\d/g, () => faker.number.int(9));

  return generatedPN;
};


const switchFakerRegion = (region) => allFakers[region] || faker;

module.exports = {
  generateName,
  generateAddress,
  generatePhone,
  switchFakerRegion,
};