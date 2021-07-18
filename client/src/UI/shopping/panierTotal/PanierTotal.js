import React, { useEffect, useState , useContext } from 'react';
import './PanierTotal.css';
import Button from '../../button/Button';
import { ListContext } from "../../../contexts/ListContext";
import transactionHttp from '../../../services/transactionhttp'
import { CredentialContext } from "../../../contexts/CredentialContext";



const PanierTotal = () => {
	const { totalPrice , panier } = useContext(ListContext);
	const { user } = useContext(CredentialContext);

	const createTransaction = () => {
		const data = {
			panier,
			priceTotal:totalPrice,
			userId: user.id,
			deliveryId: user.addressId
			,
		}
		transactionHttp.saveTransaction(data)
	}


	return (
		<div className="panier-total">
			<div className="panier-total-subtotal">
				<div className="subtotal">subtotal</div>
				<div className="panier-total-price">$ {totalPrice}</div>
			</div>
			<Button onClick={createTransaction} title="Checkout" />
		</div>
	);
};

export default PanierTotal;
