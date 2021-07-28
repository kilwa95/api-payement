import React, { useEffect, useState , useContext } from 'react';
import './PanierTotal.css';
import Button from '../../button/Button';
import { ListContext } from "../../../contexts/ListContext";
import orderedHttp from '../../../services/orderedHttp'
import { CredentialContext } from "../../../contexts/CredentialContext";
import { Redirect } from 'react-router';



const PanierTotal = () => {
	const { totalPrice , panier , deletePanier } = useContext(ListContext);
	const { user } = useContext(CredentialContext);
	const [url, setUrl]  = useState('')

	const createOrderd = async () => {
		const data = {
			products: panier,
			priceTotal:totalPrice,
			factorisation: "factorisation",
			quote: "euro",
			userId: user.id,
			status: "new"
			
		}
		const res = await  orderedHttp.saveOrdered(data)
		setUrl(res.data.generatedUrl)
		deletePanier()
	}

	if(url){
		return <Redirect to={`http://localhost:4000${url}`} />
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
