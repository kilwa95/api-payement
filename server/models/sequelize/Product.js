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

Product.addHook("afterCreate",async(product) => {
	let data = await product.toJSON();
	const mongoData = await ProductMongo.findOneAndReplace({_id: data.id},data,{
		upsert: true,
        new: true,
	})
})


Product.sync({
	alter: true
});

module.exports = Product;
