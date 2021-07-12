import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useCallback,
  } from "react";

import productsHttp from '../services/productHttp';
import panierHttp from '../services/panierHttp';


  export const ListContext = createContext();

  export default function ListProvider({ children }) {
  const [ products, setProducts ] = useState([]);
	const [ panier, setPanier ] = useState([]);


    useEffect(() => {
		async function fetchData() {
			const products = await productsHttp.fetchProducts();
			setProducts(products.data.data.products);
		}
		fetchData();
	}, []);

    useEffect(() => {
		async function fetchData() {
			const products = await panierHttp.fetchProductsPanier();
			setPanier(products.data.data.panier);
		}
		fetchData();
	}, []);

 
  const addPanier= useCallback(
    async (item) => {
      setPanier([...panier, item]);
    },
    [panier]
  );

  const totalPrice = useMemo(
    () => {
      return panier.reduce((acc, item) => acc + item.product.price, 0)
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
            addPanier
          }}
        >
          {children}
        </ListContext.Provider>
      );

  }