import React, { useEffect, useState } from 'react';
import Menu from '../../UI/menu/Menu';
import List from '../../UI/product/List';
import Sidenav from '../../UI/sidenav/Sidenav';
import Panier from '../../UI/shopping/panier/Panier';
import PanierTotal from '../../UI/shopping/panierTotal/PanierTotal';
import productsHttp from '../../services/productHttp';
import panierHttp from '../../services/panierHttp';

const HomePage = (props) => {
	const [ products, setProducts ] = useState([]);
	const [ panier, setPanier ] = useState([]);
	const [ badge, setBadge ] = useState(0);
	const [ modal, setModal ] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const products = await productsHttp.fetchProducts();
			setProducts(products.data.data.products);
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			const products = await panierHttp.fetchProductsPanier();
			setPanier(products.data.data.panier);
		}
		fetchData();
	}, []);

	useEffect(
		() => {
			setBadge(panier.length);
		},
		[ panier ]
	);

	return (
		<React.Fragment>
			<Menu setModal={setModal} badge={badge} />
			<List items={products} />
			<Sidenav onClose={() => setModal(false)} open={modal}>
				<Panier items={panier} />
				<PanierTotal />
			</Sidenav>
		</React.Fragment>
	);
};
export default HomePage;
