//libs
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LOGINS } from "../routes";
import { StaticLoading } from '../components/base/Loading';

const ContainerLogin = () => {
    return (
            <Suspense fallback={<StaticLoading />}>
                <Switch >
                    {LOGINS.map((data, idx) => (
                        <Route exact key={idx} path={data.path}>
                            <data.component />
                        </Route>
                    ))}
                </Switch>
            </Suspense>
    );
}



export default ContainerLogin;
