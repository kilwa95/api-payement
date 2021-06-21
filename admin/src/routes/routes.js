import MerchantPage from '../views/MerchantPage';

const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{
		path: '/merchants',
		name: 'merchants',
		component: MerchantPage
	}
];

export default routes;
