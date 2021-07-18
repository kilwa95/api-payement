import {
    createContext,
    useState,
    useCallback,
  } from "react";

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
      console.log(item);
			localStorage.setItem('user', JSON.stringify(item));
		    setUser(item);
		},
		[user]
	  );

      return (
        <CredentialContext.Provider
          value={{
            token,
            user,
            saveToken,
            saveUser,
            logout
          }}
        >
          {children}
        </CredentialContext.Provider>
      );

  }
