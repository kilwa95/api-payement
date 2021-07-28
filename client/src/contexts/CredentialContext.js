import {
    createContext,
    useState,
    useCallback,
    useEffect
  } from "react";

  import usersHttp from '../services/usersHttp';


  export const CredentialContext = createContext();


  export default function CredentialsProvider({ children }) {

    const getToken = () => {
      const token = localStorage.getItem('token');
      return token;
    };

    const getUser = () => {
      const user = localStorage.getItem('user');
      return JSON.parse(user);
    };

    const [ token, setToken ] = useState(getToken);
    const [ user, setUser ] = useState(getUser);
    const [ credentials, setCredentials ] = useState({});


    useEffect(() => {
      async function fetchData() {
        const credentials = await usersHttp.fetchCredentials();
        setCredentials(credentials.data.data);
      }
      fetchData();
    }, [user]);

    const logout = useCallback(
      async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken('');
        setUser('');
         },
      [token,user]
      );

    const saveToken = useCallback(
		async (item) => {
			localStorage.setItem('token', item);
			setToken(item);
		},
		[token]
	  );

      
    const saveUser = useCallback(
		async (item) => {
			localStorage.setItem('user', JSON.stringify(item));
		    setUser(item);
		},
		[user]
	  );
      
    const saveCredentials = useCallback(
		async (values) => {
			const result = await usersHttp.saveCredentials(values)
      setCredentials(result.data.data)
		},
		[credentials]
	  );

    

      return (
        <CredentialContext.Provider
          value={{
            token,
            user,
            credentials,
            saveToken,
            saveUser,
            saveCredentials,
            logout
          }}
        >
          {children}
        </CredentialContext.Provider>
      );

  }
