const { generateUsers } = require('../utils/generateUsers.js');
const { switchFakerRegion } = require('../utils/faker.js');

const userController = (req, res) => {
  try {

    const { seed, region,errorRate, batch } = req.query;
    if (!errorRate || !region || !seed) {
      return res.status(400).json({
        message: 'Missing query parameters',
      });
    }

    const errorRateNumber = Math.abs(parseInt(errorRate), 10);
    const seedNumber = Math.abs(parseInt(seed), 10);
    const batchSize = Math.abs(parseInt(batch), 10) || 10;
    
    console.log('errorRateNumber', errorRateNumber);
    console.log('seedNumber', seedNumber);
    console.log('region', region);

    const faker = switchFakerRegion(region);
    faker.seed(seedNumber);
    const user = generateUsers(faker, batchSize, errorRateNumber, region)

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