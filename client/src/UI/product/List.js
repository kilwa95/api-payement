import React from 'react';
import Product from '../product/Product';

const List = (props) => {
	return (
		<div className="container mt-5">
			<div className="d-flex flex-wrap">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};
export default List;
