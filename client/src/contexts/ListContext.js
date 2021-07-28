import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useCallback,
  } from "react";

import productsHttp from '../services/productHttp';
import orderedHttp from '../services/orderedHttp';


  export const ListContext = createContext();

  export default function ListProvider({ children }) {

    const getPanier = () => {
      const panier = JSON.parse(localStorage.getItem("panier")) || [] ;
      return panier;
    };

  const [ products, setProducts ] = useState([]);
  const [ ordereds, setOrdereds ] = useState([]);
	const [ panier, setPanier ] = useState(getPanier);

  const fields = [
      { key: 'priceTotal' },
      // { key: 'userFirstName' },
      // { key: 'userLastName' },
      // { key: 'deliveryStreet' },
      // { key: 'deliveryCity' },
      // { key: 'deliveryPostalCode' },
      { key: 'produitsInCart' },
      { key: 'status' },
      {
        key: 'rembourser',
        label: ' rembourser commande',
        sorter: false,
        filter: false
      },
    ];


    useEffect(() => {
		async function fetchData() {
			const products = await productsHttp.fetchProducts();
			setProducts(products.data.data.products);
		}
		fetchData();
	}, []);

    useEffect(() => {
		async function fetchData() {
			const ordereds = await orderedHttp.fetchOrdereds();
			setOrdereds(ordereds.data.data);
		}
		fetchData();
	}, []);

 

  const addPanier= useCallback(
    async (item) => {
      setPanier([...panier, item]);
      localStorage.setItem('panier', JSON.stringify(panier));
    },
    [panier]
  );
  const deletePanier= useCallback(
    async () => {
      localStorage.removeItem('panier')
      setPanier([]);

    },
    [panier]
  );

  const reimburse = useCallback(async (id) => {
      const ordered  = await orderedHttp.reimburseOrdered(id)
      setOrdereds(
        ordereds.map((m) => (m.id !== ordered.data.data.id ? m : ordered.data.data))
    );
  },[ordereds])

  const totalPrice = useMemo(
    () => {
      return panier.reduce((acc, item) => acc + item.price, 0)
    },
    [panier]
  );
  const badge = useMemo(
    () => {
      return panier.length
    },
    [panier]
  );


    return (
        <ListContext.Provider
          value={{
            products,
            panier,
            badge,
            totalPrice,
            ordereds,
            fields,
            addPanier,
            deletePanier,
            reimburse,
          }}
        >
          {children}
        </ListContext.Provider>
      );

  }