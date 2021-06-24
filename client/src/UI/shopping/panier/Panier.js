import React from 'react';
import CartProduct from '../cartProduct/CartProduct';
import './Panier.css';

const Panier = ({ items }) => {
	return (
		<div className="panier">
			{items.map((item) => (
				<CartProduct titre={item.product.titre} price={item.product.price} image={item.product.image} />
			))}
		</div>
	);
};

export default Panier;
