//libs
import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory, withRouter, Link, useLocation, matchPath, Redirect, useParams } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from 'react-animated-css';
import PageNotFound from 'templates/ErrorPage/PageNotFound';
import { PAGES_URL } from 'contant';
import { TOKEN } from 'functions/Utils';

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
                            {TOKEN == null
                                &&
                                <Redirect from={PAGES_URL.profile.url + "/:accountId"} to={PAGES_URL.login.url} />
                            }
                        </Route>
                    ))}
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default Container;



