import React from 'react';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';

const Wrapper = (props) => {
	return (
		<div className="c-wrapper">
			<Header />
			<Body />
			<Footer />
		</div>
	);
};
export default Wrapper;
