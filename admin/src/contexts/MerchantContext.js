import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useCallback,
  } from "react";

import merchantsHttp from '../services/merchantsHttp'

  export const MerchantContext = createContext();

  export default function MerchantProvider({ children }) {
    const [ merchants, setMerchants ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const merchants = await merchantsHttp.fetchMerchants();
            setMerchants(merchants.data.data.merchants);
        }
		fetchData();
	}, []);
    

    return (
        <MerchantContext.Provider
          value={{
            merchants,
            setMerchants
          }}
        >
          {children}
        </MerchantContext.Provider>
      );


  }

