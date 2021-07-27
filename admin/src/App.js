import React from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import RegistrationPage from './views/RegestrartionPage'
import './App.css';
import Layout from '../src/UI/layout/Layout';
import LoginPage from './views/LoginPage';
import useToken from './hooks/useToken';
import useUser from './hooks/useUser';



const App = () => {
    const { setToken } = useToken();
    const { setUser } = useUser();


    return (
        <HashRouter>
            <React.Suspense>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
                        <Route exact path="/registration" name="Registration" render={(props) => <RegistrationPage {...props} />} />
                        <Route exact path="/login" name="login" render={(props) => <LoginPage {...props} setUser={setUser} setToken={setToken} />} />
                    </Switch>
                </BrowserRouter>
            </React.Suspense>
        </HashRouter>
    );
};

export default App;