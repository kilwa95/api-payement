import './Product.css';
import Button from '../button/Button';
const Product = (props) => {
	let { image, titre, price } = props;

	return (
		<div className="product">
			<img className="product-image" src={image} alt={props.alt} />
			<p className="product-titre">{titre} </p>
			<div className="product-price"> {price} € </div>
			<Button type="add-cart" title="add to carte" />
		</div>
	);
};

export default Product;
