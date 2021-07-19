import * as axios from 'axios';

const transactionHttp = {
	fetchTransactions: async function() {
		const transactions = await axios.get('http://localhost:3001/admin/transactions', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return transactions;
	},
};

export default transactionHttp;
