import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Wrapper from '../wrapper/Wrapper';

const Layout = (props) => {
	return (
		<div className="app">
			<Sidebar />
			<Wrapper />
		</div>
	);
};

export default Layout;
