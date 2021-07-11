const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const Product = require('./Product');
const User = require('./User');
const PanierMongo = require('../mongo/Panier')


class Panier extends Model {}

Panier.init(
	{},
	{
		sequelize: connection,
		modelName: 'Panier'
	}
);

Panier.belongsTo(Product, { as: 'product' });
Panier.belongsTo(User, { as: 'user' });
Product.hasMany(Panier, { foreignKey: 'productId', as: 'writtenproducts' });
User.hasMany(Panier, { foreignKey: 'userId', as: 'writtenusers' });


const denormalizePanier  = async (panier) => {
	const sequelizeData = await Panier.findByPk(panier.id,{
		attributes: ['id'],
		where: {
			userId: panier.userId
		},
		include: [
			{
				model: Product,
				as: 'product',
				attributes: [ 'id', 'titre', 'price', 'image' ]
			}
		]
	});

	const data  = sequelizeData.toJSON();
	console.log('debugger',{panier,sequelizeData});
	return PanierMongo.findOneAndReplace({ _id: data.id }, data, {
        upsert: true,
        new: true,
      });
}




Panier.addHook("afterCreate",denormalizePanier)
Panier.addHook("afterUpdate",denormalizePanier)

Panier.sync({
	alter: true
});

module.exports = Panier;
