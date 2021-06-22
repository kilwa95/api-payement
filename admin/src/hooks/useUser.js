import { useState } from 'react';

export default function useUser() {
	const getUser = () => {
		const user = localStorage.getItem('user');
		return user;
	};
	const [ user, setUser ] = useState(getUser);

	const saveUser = (user) => {
		localStorage.setItem('user', JSON.stringify(user));
		setUser(user);
	};

	return {
		setUser: saveUser,
		user
	};
}
