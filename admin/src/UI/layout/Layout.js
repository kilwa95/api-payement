import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Wrapper from '../wrapper/Wrapper';
import './Layout.css';

const Layout = (props) => {
	return (
		<div className="layout">
			<Sidebar />
			<Wrapper />
		</div>
	);
};

export default Layout;
