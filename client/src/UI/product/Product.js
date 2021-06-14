import './Product.css';
import Button from './Button';
const Product = (props) => {
	return (
		<div className="product">
			<img
				className="product-image"
				src={
					'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/12064273040195392_1.jpg'
				}
				alt={props.alt}
			/>
			<p className="product-titre">Cat Tee Black T-Shirt </p>
			<div className="product-price"> 10,90 € </div>
			<Button type="add-cart" title="add to carte" />
		</div>
	);
};

export default Product;
