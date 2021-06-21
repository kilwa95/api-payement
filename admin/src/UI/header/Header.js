import React from 'react';

import './Header.css';
import Menu from '../menu/Menu';

const Header = (props) => {
	return (
		<header className="header">
			<Menu />
		</header>
	);
};

export default Header;
