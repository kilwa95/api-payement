const { Model, DataTypes } = require('sequelize');
const connection = require('../../config/sequelize');
const User = require('./User');
const Address = require('./Address');



class Commande extends Model {}

Commande.init(
	{
        priceTotal: DataTypes.INTEGER,
        factorisation: DataTypes.STRING,
        quote: DataTypes.STRING,
		status: DataTypes.STRING
	},
	{
		sequelize: connection,
		modelName: 'Commande'
	}
);



Commande.belongsTo(User, { as: 'user' });
User.hasMany(Commande, { foreignKey: 'userId', as: 'commandes' });
Commande.belongsTo(Address, { as: 'delivery' });
Address.hasMany(Commande, { foreignKey: 'addressId', as: 'commandes' });



Commande.sync({
	alter: true
});

module.exports = Commande;