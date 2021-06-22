import React, { useState } from 'react';
import LoginForm from '../UI/form/loginForm/LoginForm';
import usersHttp from '../services/usersHttp';

const LoginPage = ({ setToken, setUser }) => {
	const onSubmit = async (values) => {
		const data = await usersHttp.loginUser(values);
		let { user, token } = data;
		setToken(token);
		setUser(user);
	};
	return <LoginForm onSubmit={onSubmit} />;
};

export default LoginPage;
