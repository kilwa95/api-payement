import React, { useEffect, useState } from 'react';
import './PanierTotal.css';
import Button from '../../button/Button';

const PanierTotal = ({ panier }) => {
	const [ totalPrice, setTotalPrice ] = useState(0);

	useEffect(
		() => {
			const total = panier.reduce((acc, item) => acc + item.product.price, 0);
			setTotalPrice(total);
		},
		[ panier ]
	);
	return (
		<div className="panier-total">
			<div className="panier-total-subtotal">
				<div className="subtotal">subtotal</div>
				<div className="panier-total-price">$ {totalPrice}</div>
			</div>
			<Button title="Checkout" />
		</div>
	);
};

export default PanierTotal;
