import './Product.css';
import Button from '../button/Button';
import panierHttp from '../../services/panierHttp';
import { useState, useEffect , useContext} from 'react';
import { ListContext } from "../../contexts/ListContext";


const Product = ({ id, image, titre, price}) => {
	const [ isPanier, setIsPanier ] = useState(false);
	const { panier , addPanier } = useContext(ListContext);


	useEffect(() => {
		let ids = panier.map((item) => item.product.id);
		if (ids.includes(id)) {
			setIsPanier(true);
		}
	});

	const addProductPanier = async () => {
		const body = {
			userId: 1,
			productId: id
		};

		let ids = panier.map((item) => item.product.id);
		if (!ids.includes(id)) {
			const result = await panierHttp.saveProductsPanier(body);
			addPanier(result.data.data.panier )
		}
		setIsPanier(true);
	};

	return (
		<div className="product">
			<img className="product-image" src={image} alt={titre} />
			<p className="product-titre">{titre} </p>
			<div className="product-price"> {price} € </div>
			<Button
				onClick={addProductPanier}
				type="add-cart"
				title={isPanier ? 'product in panier' : 'add to carte'}
			/>
		</div>
	);
};

export default Product;
