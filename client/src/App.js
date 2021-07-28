import React, { Component } from 'react';
import HomePage from './views/homepage/HomePage';
import LoginPage from './views/login/LoginPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ListProvider from "./contexts/ListContext";
import CredentialsProvider from "./contexts/CredentialContext";
import OrderedPage from "./views/ordered/OrderedPage"
import CredentialsPage from "./views/credential/CredentialsPage"
import RegistrationUserPage from "./views/registration/RegistrationUserPage"
import ConfirmationPage from "./views/payement/ConfirmationPage"
import AnnulationPage from "./views/payement/AnnulationPage"

class App extends Component {
	render() {
		return (
			<CredentialsProvider>
				<HashRouter>
					<React.Suspense>
						<Switch>
						<ListProvider>
							<Route exact path="/login" name="login" render={(props) => <LoginPage {...props} />} />
							<Route exact path="/ordereds" name="ordereds" render={(props) => <OrderedPage {...props} />} />
							<Route exact path="/credentials" name="credentials" render={(props) => <CredentialsPage {...props} />} />
							<Route exact path="/registrationUser" name="registrationUser" render={(props) => <RegistrationUserPage {...props} />} />
							<Route path="/urlConfirmation" name="confirmation" render={(props) => <ConfirmationPage {...props} />} />
							<Route path="/urlAnnulation" name="annulation" render={(props) => <AnnulationPage {...props} />} />
							<Route exact path="/" name="HomePage" render={(props) => <HomePage {...props} />} />
						</ListProvider>				
						</Switch>
					</React.Suspense>
				</HashRouter>
			</CredentialsProvider>

		);
	}
}

export default App;
