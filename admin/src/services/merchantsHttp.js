import * as axios from 'axios';

const merchantsHttp = {
	fetchMerchants: async function() {
		const merchants = await axios.get('http://localhost:4000/merchants', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return merchants;
	},
	updateMerchants: async function(id, body) {
		const merchant = await axios.put(`http://localhost:4000/merchants/${id}/validate`, body, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return merchant;
	}
};

export default merchantsHttp;
