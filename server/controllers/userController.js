const { allfakers, faker } = require('@faker-js/faker');


const userController = (req, res) => {
  try {
    if(!req.query) {
      return res.status(400).json({
        message: 'Bad request',
      });
    }

    const { errorRate, region, seed } = req.query;

    const errorRateNumber = Math.abs(parseInt(errorRate), 10);
    const seedNumber = Math.abs(parseInt(seed), 10);
    
    console.log('errorRateNumber', errorRateNumber);
    console.log('seedNumber', seedNumber);
    console.log('region', region);
    
    faker.seed(seedNumber);
    // name
    const firstName = faker.person.firstName()
    const middleName = faker.person.middleName()
    const lastName = faker.person.lastName()   

    // address
    const city = faker.location.city()
    const street = faker.location.streetAddress()
    const country = faker.location.country()
    const zipCode = faker.location.zipCode()

    return res.status(200).json({
      message: 'Get all users',
      data: {
        firstName,
        middleName,
        lastName,
        city,
        street,
        country,
        zipCode,
      },
    });
  } catch (error) {
    console.error('Error in userController', error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};


module.exports = userController;