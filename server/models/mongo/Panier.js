const { Schema } = require("mongoose");
const connection = require('../../config/mongo');

const panierSchema = new Schema({
  _id: Number,
  product: Object
});

const PanierMongo = connection.model("Panier", panierSchema);

module.exports = PanierMongo