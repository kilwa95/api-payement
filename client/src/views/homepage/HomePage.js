import React, {  useState  , useContext} from 'react';
import Menu from '../../UI/menu/Menu';
import List from '../../UI/product/List';
import Sidenav from '../../UI/sidenav/Sidenav';
import Panier from '../../UI/shopping/panier/Panier';
import PanierTotal from '../../UI/shopping/panierTotal/PanierTotal';
import MenuUser from '../../UI/menu/MenuUser';
import MenuMerchant from '../../UI/menu/MenuMerchant';
import { CredentialContext } from "../../contexts/CredentialContext";


const HomePage = (props) => {
	const [ modal, setModal ] = useState(false);
	const { token , user} = useContext(CredentialContext);

	

	return (
		<React.Fragment>
			{user ? user.roles.includes('user') ? <MenuUser setModal={setModal} /> : <MenuMerchant setModal={setModal} /> :<Menu setModal={setModal} /> }
			<List />
			<Sidenav onClose={() => setModal(false)} open={modal}>
				<Panier />
				<PanierTotal />
			</Sidenav>
		</React.Fragment>
	);
};
export default HomePage;
