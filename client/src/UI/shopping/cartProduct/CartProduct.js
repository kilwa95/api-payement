import React from 'react';
import './CartProduct.css';

const CartProduct = (props) => {
	return (
		<div className="cart-product">
			<div className="cart-product-col1">
				<img
					className="cart-product-img"
					src="https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"
					width="60"
				/>
				<div className="cart-product-paragraphe">
					<div className="cart-product-paragraphe-title">Sphynx Tie Dye Wine T-Shirt</div>
					<div className="cart-product-paragraphe-description">X | Front tie dye print</div>
				</div>
			</div>
			<div className="cart-product-col2">
				<div className="cart-product-col2-delete">&times;</div>
				<div style={{ height: '19px' }} />
				<div className="cart-product-col2-price">9.00 €</div>
			</div>
		</div>
	);
};
export default CartProduct;
