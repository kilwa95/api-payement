import React from 'react';
import Product from '../product/Product';

const List = (props) => {
	let { items, setBadge } = props;
	return (
		<div className="container mt-5">
			<div className="d-flex flex-wrap">
				{items.map((product) => (
					<Product
						setBadge={setBadge}
						key={product.id}
						titre={product.titre}
						price={product.price}
						image={product.image}
					/>
				))}
			</div>
		</div>
	);
};
export default List;
