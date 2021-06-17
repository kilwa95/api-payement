import React, { Component } from 'react';
import HomePage from './views/homepage/HomePage';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
						<Route exact path="/" name="HomePage" render={(props) => <HomePage {...props} />} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;