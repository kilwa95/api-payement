import react from 'react';
import './Menu.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



const styles = {
	paddingRight: '13px'
};

const Menu = (props) => {
	let history = useHistory();
	return (
		<div className="menu">
			<div className="menu-icon">
				<DehazeIcon />
			</div>
			<div className="menu-A">
				<div style={styles}>Dashboard</div>
				<div style={styles}>Users</div>
				<div style={styles}>Trasaction</div>
				<div style={styles}>Commandes</div>
			</div>
			<div className="menu-B">
			<Dropdown>
			<Dropdown.Toggle variant="outline-success" id="dropdown-basic">
				account admin
                </Dropdown.Toggle>
				<Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push("/account")}>account</Dropdown.Item>
                <Dropdown.Item onClick={() => history.push("/credentials")}>credentials </Dropdown.Item>
                <Dropdown.Item onClick={() => history.push("/transactions")}> mes transactions </Dropdown.Item>
                </Dropdown.Menu>
			</Dropdown>

			</div>
		</div>
	);
};

export default Menu;
