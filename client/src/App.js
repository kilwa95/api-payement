import React, { Component } from 'react';
import HomePage from './views/homepage/HomePage';
import LoginPage from './views/login/LoginPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ListProvider from "./contexts/ListContext";
import CredentialsProvider from "./contexts/CredentialContext";

class App extends Component {
	render() {
		return (
			<CredentialsProvider>
				<HashRouter>
					<React.Suspense>
						<Switch>
						<ListProvider>
							<Route exact path="/" name="HomePage" render={(props) => <HomePage {...props} />} />
							<Route exact path="/login" name="login" render={(props) => <LoginPage {...props} />} />
						</ListProvider>				
						</Switch>
					</React.Suspense>
				</HashRouter>
			</CredentialsProvider>

		);
	}
}

export default App;
