import React from 'react';
import Product from '../product/Product';

const List = (props) => {
	let { products } = props;
	return (
		<div className="container mt-5">
			<div className="d-flex flex-wrap">
				{products.map((product) => (
					<Product key={product.id} titre={product.titre} price={product.price} image={product.image} />
				))}
			</div>
		</div>
	);
};
export default List;
