import MerchantPage from '../views/MerchantPage';
import TransactionPage from '../views/TransactionPage';
import TransactionAdminPage from '../views/TransactionAdminPage'
import MerchantProvider from '../contexts/MerchantContext'
import TransactionProvider from '../contexts/TransactionContext'

const routes = [
	{ path: '/admin', exact: true, name: 'admin' },
	{
		exact: true,
		path: '/admin/merchants',
		name: 'merchants',
		provider: MerchantProvider,
		component: MerchantPage
	},
	{
		exact: true,
		path: '/admin/transactions',
		name: 'transactions',
		provider: TransactionProvider,
		component: TransactionPage
	},
	{
		exact: true,
		path: '/transactions',
		name: 'transactionsAdmin',
		provider: TransactionProvider,
		component: TransactionAdminPage
	}
];

export default routes;
