import React, { useContext} from "react";
import Product from '../product/Product';
import { ListContext } from "../../contexts/ListContext";


const List = () => {
	const { products } = useContext(ListContext);

	return (
		<div className="container mt-5">
			<div className="d-flex flex-wrap">
				{products.map((product) => (
					<Product
						id={product.id}
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
