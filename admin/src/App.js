import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Layout from '../src/UI/layout/Layout';
class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
						<Route path="/" name="Home" render={(props) => <Layout {...props} />} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
