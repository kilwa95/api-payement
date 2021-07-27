import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import transactionHttp from '../services/transactionHttp'


export const TransactionContext = createContext();

export default function TransactionProvider({ children }) {
  const [ transactions, setTransactions ] = useState([]);


  const fields = [
    { key: 'priceTotal' },
    { key: 'userFirstName' },
    { key: 'userLastName' },
    { key: 'deliveryStreet' },
    { key: 'deliveryCity' },
    { key: 'deliveryPostalCode' },
    { key: 'produitsInCart' },
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


  return (
      <TransactionContext.Provider
        value={{
          transactions,
          fields
        }} 
      >
        {children}
      </TransactionContext.Provider>
    );
}