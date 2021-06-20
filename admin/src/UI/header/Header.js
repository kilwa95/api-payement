import React from 'react';

import './Header.css';
import Menu from '../menu/Menu';

const Header = (props) => {
	return (
		<header class="header">
			<Menu />
		</header>
	);
};

export default Header;
