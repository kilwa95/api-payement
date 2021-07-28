import './Panier.css';
import React,{useContext} from 'react';
import CartProduct from '../cartProduct/CartProduct';
import { ListContext } from "../../../contexts/ListContext";
 



const Panier = () => {
	const { panier } = useContext(ListContext);

	console.log('render panier')
	return (
		<div className="panier">
			{panier.map((item) => (
				<CartProduct titre={item.titre} price={item.price} image={item.image} />
			))}
		</div>
	);
};

export default Panier;
