import React, { useState } from 'react';
import LoginForm from '../UI/form/loginForm/LoginForm';
import usersHttp from '../services/usersHttp';
import useToken from '../hooks/useToken';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ setToken, setUser }) => {
  const [error, setError] = useState('');
  const { token } = useToken();

  const onSubmit = async values => {
    const data = await usersHttp.loginUser(values);
    let { user, token } = data;
    if (user) {
      setError('');
      setToken(token);
      setUser(user);
    } else {
      setError('le user not found ou le mot passe incorrect');
    }
  };

  if (token) {
    return <Redirect to="/" />;
  }

  return <LoginForm error={error} onSubmit={onSubmit} />;
};

export default LoginPage;
