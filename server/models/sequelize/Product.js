const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const ProductMongo = require('../mongo/Product')


class Product extends Model {}

Product.init(
	{
		titre: DataTypes.STRING,
		price: DataTypes.INTEGER,
		image: DataTypes.STRING
	},
	{
		sequelize: connection,
		modelName: 'Product'
	}
);

const denormalizeProduct  = async (product) => {
	let data = await product.toJSON();
	 return await ProductMongo.findOneAndReplace({_id: data.id},data,{
		upsert: true,
        new: true,
	})
}

Product.addHook("afterCreate",denormalizeProduct)
Product.addHook("afterUpdate",denormalizeProduct)



Product.sync({
	alter: true
});

module.exports = Product;
