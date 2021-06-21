import MerchantPage from '../views/MerchantPage';

const routes = [
	{ path: '/admin', exact: true, name: 'admin' },
	{
		path: '/admin/merchants',
		name: 'merchants',
		component: MerchantPage
	}
];

export default routes;
