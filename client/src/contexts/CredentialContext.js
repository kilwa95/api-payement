import {
    createContext,
    useState,
    useCallback,
  } from "react";

  export const CredentialContext = createContext();


  export default function CredentialsProvider({ children }) {
    const [ token, setToken ] = useState('');
    const [ user, setUser ] = useState({});


    const saveToken = useCallback(
		async () => {
			localStorage.setItem('token', token);
			setToken(token);
		},
		[token]
	  );

      
    const saveUser = useCallback(
		async () => {
			localStorage.setItem('user', JSON.stringify(user));
		    setUser(user);
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
          }}
        >
          {children}
        </CredentialContext.Provider>
      );

  }
