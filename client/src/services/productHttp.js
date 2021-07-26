import * as axios from 'axios';

const productsHttp = {
	fetchProducts: async function() {
		const products = await axios.get('http://localhost:3003/products');
		return products;
	}
};

export default productsHttp;
