import React, { Component } from 'react';
import Article from '../src/UI/article/Article';

class App extends Component {
	render() {
		return <Article title="Paris" description="Voyage en france en 10 jours" date="10/09/2020" prix={200} />;
	}
}

export default App;
