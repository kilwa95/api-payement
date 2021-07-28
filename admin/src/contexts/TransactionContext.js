import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useCallback,
  } from "react";

  import useUser from "../hooks/useUser"


  import transactionHttp from '../services/transactionHttp'


  export const TransactionContext = createContext();

  export default function TransactionProvider({ children }) {
    const [ transactions, setTransactions ] = useState([]);
    const [ transactionsMerchant, setTransactionsMerchant ] = useState([]);
    const { user } = useUser()
    


    const fields = [
      { key: 'priceTotal' },
      { key: 'panierUser' },
      { key: 'clientInformation' },
      { key: 'quote' },
      { key: 'status' },
      { key: 'delivery' },
      {
        key: 'opertations',
        sorter: false,
        filter: false
      },
    ];


    useEffect(() => {
        async function fetchData() {
            const transactions = await transactionHttp.fetchTransactions();
            setTransactions(transactions.data.data.transactions);
        }
		fetchData();
	}, []);

    useEffect(() => {
        async function fetchData() {
            const transactions = await transactionHttp.fetchTransactions();
            setTransactions(transactions.data.data.transactions);
        }
		fetchData();
	}, []);

    useEffect(() => {
        async function fetchData() {
            const transactions = await transactionHttp.getTransactionMerchant(user.id);
            setTransactionsMerchant(transactions.data.data.transactions);
        }
		fetchData();
	}, []);


    return (
        <TransactionContext.Provider
          value={{
            transactions,
            transactionsMerchant,
            fields
          }} 
        >
          {children}
        </TransactionContext.Provider>
      );
  }


