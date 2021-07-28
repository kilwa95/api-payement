import React from 'react';
import './CartProduct.css';

const CartProduct = ({ titre, price, image }) => {
	return (
		<div className="cart-product">
			<div className="cart-product-col1">
				<img className="cart-product-img" src={image} width="60" />
				<div className="cart-product-paragraphe">
					<div className="cart-product-paragraphe-title">{titre}</div>
					<div className="cart-product-paragraphe-description">X | {titre}</div>
				</div>
			</div>
			<div className="cart-product-col2">
				<div className="cart-product-col2-delete">&times;</div>
				<div style={{ height: '19px' }} />
				<div className="cart-product-col2-price"> {price} €</div>
			</div>
		</div>
	);
};
export default CartProduct;
