import React from 'react';
import '../menu/Menu.css';

const Menu = (props) => {
	return (
		<div className="menu">
			<div>
				<img src="https://secure.meetupstatic.com/photos/event/5/3/2/600_484801330.jpeg" width="90" />
			</div>
			<div>
				<input className="menu-input" placeholder="Rechercher" />
			</div>
			<a>Espace client</a>
			<a>Espace marchant</a>
		</div>
	);
};
export default Menu;
