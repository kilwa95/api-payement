import * as axios from 'axios';

const usersHttp = {
	loginUser: async function(body) {
		const result = await axios.post(`http://localhost:4000/login`, body);
		return result.data.data;
	},
	registration: async function(body) {
		const user = await axios.post(`http://localhost:4000/merchants`, body);
		return user;
	},
};

export default usersHttp;
