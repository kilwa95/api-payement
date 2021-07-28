const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const Product = require('./Product');
const Commande = require('./Commande');

class Commande_product extends Model {}

Commande_product.init(
  {},
  {
    sequelize: connection,
    modelName: 'Commande_product',
  }
);

Commande.belongsToMany(Product, { as: 'products', through: 'Commande_product' });
Product.belongsToMany(Commande, { as: 'commandes', through: 'Commande_product' });

Commande_product.sync({
  alter: true,
});

module.exports = Commande_product;
