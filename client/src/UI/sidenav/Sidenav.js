import React from 'react';
import '../sidenav/Sidenav.css';

const Sidenav = (props) => {
	let { open, onClose, children } = props;

	if (open) {
		return (
			<div className="sidenav">
				<a onClick={onClose} className="closebtn">
					&times;
				</a>
				{children}
			</div>
		);
	} else {
		return '';
	}
};
export default Sidenav;
