//libs
import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory, withRouter, Link, useLocation, matchPath, Redirect } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from 'react-animated-css';
import PageNotFound from 'templates/ErrorPage/PageNotFound';

const Container = () => {
    return (
        <div className="container-fluid">
            <Suspense fallback={''}>
                <Switch >
                    {MAIN.map((data, idx) => (
                        <Route exact key={idx} path={data.path}>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <data.component />
                            </Animated>
                        </Route>
                    ))}
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default Container;



