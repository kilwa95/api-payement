import * as axios from 'axios';

const transactionHttp = {
	saveTransaction: async function(body) {
		const transaction = await axios.post(' http://localhost:3001/transactions', body, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return transaction;
	}
};

export default transactionHttp;
