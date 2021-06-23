import * as axios from 'axios';

const usersHttp = {
	loginUser: async function(body) {
		const result = await axios.post(`http://localhost:3001/users/login`, body);
		let { data } = result.data.data;
		return data;
	}
};

export default usersHttp;
