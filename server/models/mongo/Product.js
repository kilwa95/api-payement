const { Schema } = require("mongoose");
const connection = require('../../config/mongo');

const productSchema = new Schema({
  _id: Number,
  titre: String,
  price: Number,
  image: String,
});

const ProductMongo = connection.model("Product", productSchema);

module.exports = ProductMongo