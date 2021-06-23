import './Product.css';
import Button from '../button/Button';
import panierHttp from '../../services/panierHttp';

const Product = ({ id, image, titre, price, items, setPanier }) => {
	const addProductPanier = async () => {
		const body = {
			userId: 1,
			productId: id
		};

		const result = await panierHttp.saveProductsPanier(body);
		console.log(result.data.data.panier);
		setPanier([ ...items, result.data.data.panier ]);
	};

	return (
		<div className="product">
			<img className="product-image" src={image} alt={titre} />
			<p className="product-titre">{titre} </p>
			<div className="product-price"> {price} € </div>
			<Button onClick={addProductPanier} type="add-cart" title="add to carte" />
		</div>
	);
};

export default Product;
