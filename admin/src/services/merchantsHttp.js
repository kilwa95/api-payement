import * as axios from 'axios';

const merchantsHttp = {
	fetchMerchants: async function() {
		const merchants = await axios.get('http://localhost:3001/merchants');
		return merchants;
	},
	updateMerchants: async function(id, body) {
		const merchant = await axios.put(`http://localhost:3001/merchants/${id}`, body);
		return merchant;
	}
};

export default merchantsHttp;
