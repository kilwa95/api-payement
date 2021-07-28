const Commande = require('../models/sequelize/Commande');
const User = require('../models/sequelize/User');
const Address = require('../models/sequelize/Address');
const Commande_product = require('../models/sequelize/Commande_product');
const Product = require('../models/sequelize/Product');

exports.saveCommande = async body => {
  try {
    const commande = new Commande(body);
    await commande.save();
    return commande.id;
  } catch (error) {
    console.error(error);
  }
};

exports.saveCommandeProduct = async (ids, CommandeId) => {
  try {
    for (let id in ids) {
      await Commande_product.create({ CommandeId: CommandeId, ProductId: ids[id] });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.updateCommande = async (id, obj) => {
  try {
    const commande = await Commande.update(obj, {
      where: { id: id },
    });
    console.log(id, status);
    return commande;
  } catch (error) {
    console.error(error);
  }
};

exports.findAllcommandes = async body => {
  try {
    return await Commande.findAll({
      attributes: ['id', 'priceTotal', 'factorisation', 'quote', 'status'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email'],
          include: [
            {
              model: Address,
              as: 'address',
              attributes: ['id', 'street', 'city', 'postalCode'],
            },
          ],
        },
        {
          model: Address,
          as: 'delivery',
          attributes: ['id', 'street', 'city', 'postalCode'],
        },
        {
          model: Product,
          as: 'products',
          attributes: ['id', 'titre', 'price', 'image'],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};

exports.findCommandeById = async id => {
  try {
    return await Commande.findOne({
      attributes: ['id', 'priceTotal', 'factorisation', 'quote', 'status', 'createdAt', 'transactionId'],
      where: { id: id },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone'],
          include: [
            {
              model: Address,
              as: 'address',
              attributes: ['id', 'street', 'city', 'postalCode'],
            },
          ],
        },
        {
          model: Product,
          as: 'products',
          attributes: ['id', 'titre', 'price', 'image'],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};
