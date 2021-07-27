const Product = require('../models/sequelize/Product');

exports.saveProduct = async (body) => {
  try {
    const product = new Product(body);
    return await product.save();
  } catch (error) {
    console.error(error);
  }
};

exports.findAllProducts = async (query) => {
  try {
    return await Product.findAll({});
  } catch (error) {
    console.error(error);
  }
};
