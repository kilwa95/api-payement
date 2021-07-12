import React, { useEffect, useState , useContext } from 'react';
import './PanierTotal.css';
import Button from '../../button/Button';
import { ListContext } from "../../../contexts/ListContext";


const PanierTotal = () => {
	const { totalPrice } = useContext(ListContext);


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
