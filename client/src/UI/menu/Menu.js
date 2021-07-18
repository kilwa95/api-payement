import React , {useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../menu/Menu.css';
import CartShopping from '../shopping/CartShopping';
import Logo from '../menu/Logo';
import Search from '../menu/Serach';
import { ListContext } from "../../contexts/ListContext";


const Menu = ({ setModal }) => {
	const { badge } = useContext(ListContext);
	let history = useHistory();

	const login = () => {
		history.push("/login");
	}

	return (
		<div className="menu">
			<div style={{ width: '300px' }}>
				<Logo />
			</div>
			<div style={{ width: '990px' }}>
				<Search />
			</div>
			<div className="menu-btns">
				<button onClick={login} className="btn btn-outline-success">account user</button>
				<button className="btn btn-outline-info"> account merchant</button>
				<CartShopping onClick={() => setModal(true)} badge={badge} />
			</div>
		</div>
	);
};
export default Menu;
