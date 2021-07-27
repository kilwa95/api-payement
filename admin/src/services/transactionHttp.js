import * as axios from 'axios';
import useUser from '../hooks/useUser'


const transactionHttp = {
	fetchTransactions: async function() {
		const transactions = await axios.get('http://localhost:4000/transactions', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return transactions;
	},
	getTransactionInformations: async function(id) {
		
		const transaction = await axios.get(`http://localhost:4000/transactions/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return transaction;
	},
};

export default transactionHttp;
