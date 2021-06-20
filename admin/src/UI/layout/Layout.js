import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Wrapper from '../wrapper/Wrapper';
import './Layout.css';
import ListNav from '../sidebar/listNav/ListNav';
import HeaderSidebar from '../sidebar/headerSidebar/HeaderSidebar';
import Nav from '../sidebar/nav/Nav';
import navs from '../../routes/navs';

const Layout = (props) => {
	return (
		<div className="layout">
			<Sidebar>
				<HeaderSidebar />
				<ListNav>{navs.map((nav, index) => <Nav key={index} name={nav.name} />)}</ListNav>
			</Sidebar>
			<Wrapper />
		</div>
	);
};

export default Layout;
