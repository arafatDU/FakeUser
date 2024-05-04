const { generateNoErrorUser } = require('../utils/generateUsers.js');
const { switchFakerRegion } = require('../utils/faker.js');

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

    const faker = switchFakerRegion(region);
    
    const user = generateNoErrorUser(faker);

    return res.status(200).json({
      message: 'Get all users',
      data: user,
    });

  } catch (error) {
    console.error('Error in userController', error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};


module.exports = userController;