import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from '../src/UI/layout/Layout';
import LoginPage from './views/LoginPage';
import useToken from './hooks/useToken';
import useUser from './hooks/useUser';
import MerchantProvider from './contexts/MerchantContext'

const App = () => {
	const { token, setToken } = useToken();
	const { user, setUser } = useUser();

	if (!token) {
		return <LoginPage setUser={setUser} setToken={setToken} />;
	}

	return (
		<HashRouter>
			<React.Suspense>
				<BrowserRouter>
					<Switch>
						<MerchantProvider>
						<Route path="/" name="Home" render={(props) => <Layout {...props} />} />
						</MerchantProvider>
					</Switch>
				</BrowserRouter>
			</React.Suspense>
		</HashRouter>
	);
};

export default App;
