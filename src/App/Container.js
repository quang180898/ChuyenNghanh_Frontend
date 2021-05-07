//libs
import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory, withRouter, Link, useLocation, matchPath, Redirect } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from 'react-animated-css';

const Container = () => {
    return (
        <div className="container">
        <Suspense fallback={''}>
        <Switch >
            {MAIN.map((data, idx) => (
                <Route exact key={idx} path={data.path}>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                        <data.component />
                    </Animated>
                </Route>
            ))}
        </Switch>
    </Suspense>
    </div>
    );
}

export default Container;



