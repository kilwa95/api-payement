import React , {useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../menu/Menu.css';
import Logo from '../menu/Logo';
import Search from '../menu/Serach';
import { ListContext } from "../../contexts/ListContext";
import { Dropdown } from 'react-bootstrap';



const Menu = ({ setModal }) => {
	const { badge } = useContext(ListContext);
	let history = useHistory();



	return (
		<div className="menu">
			<div style={{ width: '300px' }}>
				<Logo />
			</div>
			<div style={{ width: '990px' }}>
				<Search />
			</div>
			<div className="menu-btns">
			<Dropdown>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
				account user
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push("/login")}>login</Dropdown.Item>
                <Dropdown.Item onClick={() => history.push("/registrationUser")}>registration</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
			<Dropdown>
                <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
				account merchant
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push("/login")}>login</Dropdown.Item>
                <Dropdown.Item onClick={() => history.push("/login")}>registration</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
			</div>
		</div>
	);
};
export default Menu;
