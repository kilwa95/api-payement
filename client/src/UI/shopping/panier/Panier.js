import './Panier.css';
import React,{useContext} from 'react';
import CartProduct from '../cartProduct/CartProduct';
import { ListContext } from "../../../contexts/ListContext";


const Panier = () => {
	const { panier } = useContext(ListContext);

	return (
		<div className="panier">
			{panier.map((item) => (
				<CartProduct titre={item.product.titre} price={item.product.price} image={item.product.image} />
			))}
		</div>
	);
};

export default Panier;
