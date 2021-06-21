import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ name, to }) => {
	return (
		<Link className="nav" to={to}>
			{name}
		</Link>
	);
};

export default Nav;
