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

	getTransactionMerchant: async function(id) {
		
		const transactions = await axios.get(`http://localhost:4000/transactions?${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return transactions;
	},
	getOperationTransactions: async function(tid,mid) {
		
		const transactions = await axios.get(`http://localhost:4000/operations/?mid=${mid}&tid=${tid}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return transactions;
	},
};

export default transactionHttp;
