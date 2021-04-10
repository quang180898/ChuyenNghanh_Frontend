import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from '../store';
import { getPathList, LOGINS } from '../routes';
import MainLogin from './MainLogin';

const PrivateLoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <MainLogin />
    )} />
)
const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <Switch >
                    <Route exact path={getPathList(LOGINS)} >
                        <Route render={props => <PrivateLoginRoute {...props} />} />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}


export default App;
