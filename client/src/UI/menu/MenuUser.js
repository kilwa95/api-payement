import React , {useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../menu/Menu.css';
import CartShopping from '../shopping/CartShopping';
import Logo from '../menu/Logo';
import Search from '../menu/Serach';
import { ListContext } from "../../contexts/ListContext";
import { CredentialContext } from "../../contexts/CredentialContext";
import { Dropdown } from 'react-bootstrap';




const MenuUser = ({ setModal}) => {
    const { badge } = useContext(ListContext);
    const { user ,logout } = useContext(CredentialContext);
    // const history = useHistory()

    // const seeOrdered = () => {
    //     history.push('/ordereds')
    // }

	return (
		<div className="menu">
			<div style={{ width: '300px' }}>
				<Logo />
			</div>
			<div style={{ width: '990px' }}>
				<Search />
			</div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {user.firstName + ' ' + user.lastName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                {/* <Dropdown.Item onClick={seeOrdered}>commandes</Dropdown.Item> */}
                <Dropdown.Item onClick={logout} >logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <CartShopping onClick={() => setModal(true)} badge={badge} />

		</div>
	);
};
export default MenuUser;
