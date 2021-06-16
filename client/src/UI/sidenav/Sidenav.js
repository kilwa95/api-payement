import React from 'react';
import '../sidenav/Sidenav.css';

const Sidenav = (props) => {
	let { open, onClose, children } = props;

	if (open) {
		return (
			<div class="sidenav" onClick={onClose}>
				<a class="closebtn">&times;</a>
				{children}
			</div>
		);
	} else {
		return '';
	}
};
export default Sidenav;
