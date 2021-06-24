import React from 'react';
import Product from '../product/Product';

const List = ({ items, setBadge, setPanier, panier }) => {
	return (
		<div className="container mt-5">
			<div className="d-flex flex-wrap">
				{items.map((product) => (
					<Product
						id={product.id}
						panier={panier}
						setBadge={setBadge}
						key={product.id}
						titre={product.titre}
						price={product.price}
						image={product.image}
						setPanier={setPanier}
					/>
				))}
			</div>
		</div>
	);
};
export default List;
