import * as axios from 'axios';

const orderedHttp = {
	fetchOrdereds: async function() {
		const ordereds = await axios.get('http://localhost:3003/commandes', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return ordereds;
	},
	saveOrdered: async function(body) {
		const ordered = await axios.post('http://localhost:3003/commandes', body, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return ordered;
	},
	reimburseOrdered: async function(id) {
		const ordered = await axios.post(`http://localhost:3003/commandes/${id}/remboursement`,  {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return ordered;
	}
};

export default orderedHttp;
