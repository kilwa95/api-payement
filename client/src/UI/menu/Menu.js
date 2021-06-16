import React from 'react';
import '../menu/Menu.css';
import CartShopping from '../shopping/CartShopping';
import Logo from '../menu/Logo';
import Search from '../menu/Serach';
import UserAccount from '../menu/UserAccount';

const Menu = (props) => {
	let { badge, setModal } = props;
	return (
		<div className="menu">
			<Logo />
			<Search />
			<UserAccount type="user" />
			<UserAccount type="merchant" />
			<CartShopping onClick={() => setModal(true)} badge={badge} />
		</div>
	);
};
export default Menu;
