import * as axios from 'axios';

const productsHttp = {
	fetchProducts: async function() {
		const products = await axios.get('http://localhost:3001/products', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return products;
	}
};

export default productsHttp;
