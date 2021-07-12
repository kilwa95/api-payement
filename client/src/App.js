import React, { Component } from 'react';
import HomePage from './views/homepage/HomePage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ListProvider from "./contexts/ListContext";


class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
					<ListProvider>
						<Route exact path="/" name="HomePage" render={(props) => <HomePage {...props} />} />
					</ListProvider>
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
