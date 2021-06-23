import React, { useState } from 'react';
import LoginForm from '../UI/form/loginForm/LoginForm';
import usersHttp from '../services/usersHttp';

const LoginPage = ({ setToken, setUser }) => {
	const [ error, setError ] = useState('');
	const onSubmit = async (values) => {
		const data = await usersHttp.loginUser(values);
		let { user, token } = data;
		if (user.roles.includes('admin')) {
			setError('');
			setToken(token);
			setUser(user);
		}
		setError('le user not found ou le mot passe incorrect');
	};
	return <LoginForm error={error} onSubmit={onSubmit} />;
};

export default LoginPage;
