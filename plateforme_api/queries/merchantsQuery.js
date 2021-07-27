const User = require('../models/sequelize/User');


exports.findAllMerchants = async (req, res) => {
    try {
      const merchants = await User.findAll({})
     return merchants
    } catch (error) {
      return res.status(HTTP.SERVER_ERROR).json({ error });
    }
  };

exports.findMerchantById = async (params) => {
    try {
      const merchant = await User.findOne({
        where:{ id: params.mid}
      })
     return merchant
    } catch (error) {
      return res.status(HTTP.SERVER_ERROR).json({ error });
    }
  };

  exports.updateMerchant = async (body, params) => {
    try {
      const data = await User.update(body, {
        where: { id: params.mid }
      });
      return data;
    } catch (error) {
      return res.status(HTTP.SERVER_ERROR).json({ error });
    }
  };