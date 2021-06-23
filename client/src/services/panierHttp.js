import * as axios from 'axios';

const panierHttp = {
	fetchProductsPanier: async function() {
		const products = await axios.get('http://localhost:3001/panier/5', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return products;
	}
};

export default panierHttp;
