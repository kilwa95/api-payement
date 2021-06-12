import React, { Component } from 'react';
import Article from '../src/UI/article/Article';

class App extends Component {
	render() {
		return <Article title="montre" description="montre made in suisse" date="2015-2022" prix={200} />;
	}
}

export default App;
