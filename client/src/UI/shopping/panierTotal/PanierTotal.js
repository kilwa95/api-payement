import React, { useEffect, useState , useContext } from 'react';
import './PanierTotal.css';
import Button from '../../button/Button';
import { ListContext } from "../../../contexts/ListContext";
import orderedHttp from '../../../services/orderedHttp'
import { CredentialContext } from "../../../contexts/CredentialContext";



const PanierTotal = () => {
	const { totalPrice , panier , deletePanier } = useContext(ListContext);
	const { user } = useContext(CredentialContext);

	const createOrderd = () => {
		const data = {
			products: panier,
			priceTotal:totalPrice,
			userId: user.id,
			deliveryId: user.addressId,
			status: "created",
			
		}
		orderedHttp.saveOrdered(data)
		deletePanier()
	}


	return (
		<div className="panier-total">
			<div className="panier-total-subtotal">
				<div className="subtotal">subtotal</div>
				<div className="panier-total-price">$ {totalPrice}</div>
			</div>
			<Button onClick={createOrderd} title="Checkout" />
		</div>
	);
};

export default PanierTotal;
