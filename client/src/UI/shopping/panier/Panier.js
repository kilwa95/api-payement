import React from 'react';
import CartProduct from '../cartProduct/CartProduct';
import './Panier.css';

const Panier = ({ items }) => {
	return (
		<div className="panier">
			<CartProduct />
			<CartProduct />
			<CartProduct />
			<CartProduct />
			<CartProduct />
			<CartProduct />
			<CartProduct />
		</div>
	);
};

export default Panier;
