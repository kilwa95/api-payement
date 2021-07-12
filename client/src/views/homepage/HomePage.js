import React, { useEffect, useState } from 'react';
import Menu from '../../UI/menu/Menu';
import List from '../../UI/product/List';
import Sidenav from '../../UI/sidenav/Sidenav';
import Panier from '../../UI/shopping/panier/Panier';
import PanierTotal from '../../UI/shopping/panierTotal/PanierTotal';


const HomePage = (props) => {
	const [ modal, setModal ] = useState(false);
	return (
		<React.Fragment>
			<Menu setModal={setModal} />
			<List />
			<Sidenav onClose={() => setModal(false)} open={modal}>
				<Panier />
				<PanierTotal />
			</Sidenav>
		</React.Fragment>
	);
};
export default HomePage;
