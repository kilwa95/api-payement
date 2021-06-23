import * as axios from 'axios';

const merchantsHttp = {
	fetchMerchants: async function() {
		const merchants = await axios.get('http://localhost:3001/admin/merchants', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return merchants;
	},
	updateMerchants: async function(id, body) {
		const merchant = await axios.put(`http://localhost:3001/admin/merchants/valid/${id}`, body, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return merchant;
	}
};

export default merchantsHttp;
