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

    const fields = [
      {
        key: 'activate_company',
        label: '',
        sorter: false,
        filter: false
      },
      { key: 'companyName' },
      { key: 'email' },
      { key: 'phone' },
      { key: 'valid' },
      { key: 'city' },
      { key: 'postalCode' },
      { key: 'street' }
    ];

    useEffect(() => {
        async function fetchData() {
            const merchants = await merchantsHttp.fetchMerchants();
            setMerchants(merchants.data.data.merchants);
        }
		fetchData();
	}, []);
    

    const switchToggle = useCallback(
        async (item) => {
            let merchant;
            if (item && item.valid) {
                merchant = await merchantsHttp.updateMerchants(item.id, { valid: false });
                setMerchants(
                    merchants.map((m) => (m.id !== merchant.data.data.merchant.id ? m : merchant.data.data.merchant))
                );
            } else {
                merchant = await merchantsHttp.updateMerchants(item.id, { valid: true });
    
                setMerchants(
                    merchants.map((m) => (m.id !== merchant.data.data.merchant.id ? m : merchant.data.data.merchant))
                );
            }
        },
        [merchants]
      );


    return (
        <MerchantContext.Provider
          value={{
            merchants,
            fields,
            switchToggle
          }} 
        >
          {children}
        </MerchantContext.Provider>
      );


  }

