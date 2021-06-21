import * as axios from 'axios';

const merchantsHttp = {
	fetchMerchants: async function() {
		const merchants = await axios.get('http://localhost:3001/merchants');
		return merchants;
	}
};

export default merchantsHttp;
