import React from 'react';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';

import './Wrapper.css';

const Wrapper = (props) => {
	return (
		<div className="wrapper">
			<Header />
			<Body />
		</div>
	);
};
export default Wrapper;
