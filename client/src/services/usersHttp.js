import * as axios from 'axios';

const usersHttp = {
	loginUser: async function(body) {
		const result = await axios.post(`http://localhost:3003/login`, body);
		let { data } = result.data.data;
		return data;
	},

	registrationUser: async function(body) {
		const user = await axios.post(`http://localhost:3003/users`, body);
		return user;
	},
	fetchCredentials: async function() {
		const result = await axios.get(`http://localhost:3003/platform/credentials`,{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return result;
	},
	saveCredentials: async function(body) {
		const result = await axios.post(`http://localhost:3003/platform/credentials`,body , {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return result;
	}
};

export default usersHttp;
