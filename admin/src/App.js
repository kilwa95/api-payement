import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from '../src/UI/layout/Layout';
import LoginPage from './views/LoginPage';
class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
						<Route path="/login" name="login" render={(props) => <LoginPage {...props} />} />
						<Route path="/" name="Home" render={(props) => <Layout {...props} />} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
