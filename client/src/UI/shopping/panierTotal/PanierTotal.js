import React from 'react';
import './PanierTotal.css';
import Button from '../../button/Button';

const PanierTotal = (props) => {
	return (
		<div className="panier-total">
			<div className="panier-total-subtotal">
				<div className="subtotal">subtotal</div>
				<div className="panier-total-price">$ 81.00</div>
			</div>
			<Button title="Checkout" />
		</div>
	);
};

export default PanierTotal;
