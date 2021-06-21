import react from 'react';
import './Menu.css';
import DehazeIcon from '@material-ui/icons/Dehaze';

const styles = {
	paddingRight: '13px'
};

const Menu = (props) => {
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
			<div className="menu-B" />
		</div>
	);
};

export default Menu;
