import MerchantPage from '../views/MerchantPage';
import TransactionPage from '../views/TransactionPage';
import TransactionAdminPage from '../views/TransactionAdminPage'
import MerchantProvider from '../contexts/MerchantContext'
import TransactionProvider from '../contexts/TransactionContext'

const routes = [
	{ path: '/admin',  name: 'admin' },
	{
		
		path: '/admin/merchants',
		name: 'merchants',
		provider: MerchantProvider,
		component: MerchantPage
	},
	{
		
		path: '/admin/transactions',
		name: 'transactions',
		provider: TransactionProvider,
		component: TransactionPage
	},
	{
		
		path: '/transactions',
		name: 'transactionsAdmin',
		provider: TransactionProvider,
		component: TransactionAdminPage
	}
];

export default routes;
