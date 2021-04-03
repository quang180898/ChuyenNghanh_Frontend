import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getPathList, MAIN,LOGINS } from '../routes';
import MainLogin from './MainLogin';

const PrivateLoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <MainLogin />
    )} />
)
const App = () => {
    // const store = configureStore();
    return (
            <Router>
                <Switch >
                    <Route exact path={getPathList(LOGINS)} >
                        <Route render={props => <PrivateLoginRoute {...props} />} />
                    </Route>
                </Switch>
            </Router>
    );
}


export default App;
