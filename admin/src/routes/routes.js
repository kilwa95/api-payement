import MerchantPage from '../views/MerchantPage';
import TransactionPage from '../views/TransactionPage';
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
    }
];

export default routes;