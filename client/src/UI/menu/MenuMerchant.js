import React , {useContext} from 'react';
import { useHistory } from "react-router-dom";
import '../menu/Menu.css';
import Logo from '../menu/Logo';
import Search from '../menu/Serach';
import { CredentialContext } from "../../contexts/CredentialContext";
import { Dropdown } from 'react-bootstrap';


const MenuMerchant = ({ setModal}) => {
    const { user ,logout } = useContext(CredentialContext);
    const history = useHistory()

    const seeOrdered = () => {
        history.push('/ordereds')
    }
    const seeCredentials = () => {
        history.push('/credentials')
    }

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
                    {user ? user.companyName : ''}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item onClick={seeOrdered}>commandes</Dropdown.Item>
                <Dropdown.Item onClick={seeCredentials}>credentials</Dropdown.Item>
                <Dropdown.Item onClick={logout} >logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

		</div>
	);
};
export default MenuMerchant;
