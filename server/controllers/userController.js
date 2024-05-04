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
    //const fakers = allfakers[region.toLowerCase()] || faker;

    console.log('errorRateNumber', errorRateNumber);
    console.log('seedNumber', seedNumber);
    //console.log('fakers', fakers);

    return res.status(200).json({
      message: 'Get all users',
    });
  } catch (error) {
    returnres.status(500).json({
      message: 'Internal server error',
    });
  }
};


module.exports = userController;