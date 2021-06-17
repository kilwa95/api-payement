import React, { useEffect, useState } from 'react';
import Menu from '../../UI/menu/Menu';
import List from '../../UI/product/List';
import Sidenav from '../../UI/sidenav/Sidenav';
import Panier from '../../UI/shopping/panier/Panier';

let data = [
	{
		id: 1,
		titre: 'Cat Tee Black T-Shirt',
		price: '10,90',
		image:
			'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/12064273040195392_1.jpg'
	},
	{
		id: 2,
		titre: 'Cat Tee Black T-Shirt',
		price: '16,90',
		image:
			'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/51498472915966370_1.jpg'
	},
	{
		id: 3,
		titre: 'Cat Tee Black T-Shirt',
		price: '20.2',
		image:
			'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
	},
	{
		id: 4,
		titre: 'Cat Tee Black T-Shirt',
		price: '40,8',
		image:
			'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/11033926921508488_1.jpg'
	},
	{
		id: 5,
		titre: 'Cat Tee Black T-Shirt',
		price: '40,8',
		image:
			'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/10686354557628304_1.jpg'
	},
	{
		id: 6,
		titre: 'Cat Tee Black T-Shirt',
		price: '40,8',
		image:
			'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/11033926921508488_1.jpg'
	},
	{
		id: 7,
		titre: 'Cat Tee Black T-Shirt',
		price: '40,8',
		image:
			'https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/products/11033926921508488_1.jpg'
	}
];

const HomePage = (props) => {
	const [ products, setProducts ] = useState([]);
	const [ badge, setBadge ] = useState(0);
	const [ modal, setModal ] = useState(false);

	useEffect(() => {
		setProducts(data);
	}, []);

	useEffect(
		() => {
			setBadge(products.length);
		},
		[ products ]
	);

	return (
		<React.Fragment>
			<Menu setModal={setModal} badge={badge} />
			<List items={products} />
			<Sidenav onClose={() => setModal(false)} open={modal}>
				<Panier items={products} />
			</Sidenav>
		</React.Fragment>
	);
};
export default HomePage;
