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
    const [ operations, setOperations ] = useState([]);
    const { user } = useUser()
    


    const fields = [
      { key: 'priceTotal' },
      { key: 'panierUser' },
      { key: 'clientInformation' },
      { key: 'quote' },
      { key: 'status' },
      { key: 'delivery' },
      // {
      //   key: 'opertations',
      //   sorter: false,
      //   filter: false
      // },
      {
        key: 'show_details',
        label: 'operations',
        sorter: false,
        filter: false
      }
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


  const getOperation = useCallback( async(tid,mid) => {
    const operations = await transactionHttp.getOperationTransactions(tid,mid)
    setOperations(operations.data.data.operations)
  },[operations])


    return (
        <TransactionContext.Provider
          value={{
            transactions,
            transactionsMerchant,
            fields,
            getOperation,
            operations
          }} 
        >
          {children}
        </TransactionContext.Provider>
      );
  }


