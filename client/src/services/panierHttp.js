import * as axios from 'axios';

const panierHttp = {
	fetchProductsPanier: async function() {
		const products = await axios.get('http://localhost:3001/panier/1', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return products;
	},
	saveProductsPanier: async function(body) {
		const product = await axios.post('http://localhost:3001/panier', body, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return product;
	}
};

export default panierHttp;
