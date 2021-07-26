import React, { useState , useContext} from 'react';
import LoginForm from '../../UI/form/loginForm/LoginForm';
import { CredentialContext } from "../../contexts/CredentialContext";
import usersHttp from '../../services/usersHttp';
import {Redirect} from 'react-router-dom'



const LoginPage = () => {
	const { saveToken,saveUser,token } = useContext(CredentialContext);

	const [ error, setError ] = useState('');

	const onSubmit = async (values) => {
		const data = await usersHttp.loginUser(values);
		let { user, token } = data;
		if (user) {
			setError('');
			saveToken(token);
			saveUser(user);
		}
		else{
			setError('le user not found ou le mot passe incorrect');
		}
	};

	if(token){
		return <Redirect to="/" />
	}

	return <LoginForm onSubmit={onSubmit} error={error}  />;
};

export default LoginPage;
