//libs
import React, { useLayoutEffect, useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';

import { ADMIN } from "../routes";
import { Animated } from 'react-animated-css';
import PageNotFound from 'templates/ErrorPage/PageNotFound';
import { Header, Sidebar, Breadcrumb } from 'components/common/Frames';

const ContainerAdmin = () => {

    const location = useLocation();

    const commonReducer = useSelector(state => state.commonReducer)
    const { isShowSidebar, isShowSidebarMobile } = commonReducer;


    useEffect(() => {
        if (location.pathname != "/") {
            localStorage.setItem('paths', JSON.stringify(["/", location.pathname]))
        }
        else {
            localStorage.setItem('paths', JSON.stringify(["/"]))
        }
        window.addEventListener("beforeunload", e => sessionStorage.clear())
    }, [])


    return (
        <main className={`main-wrapper auth_page ${isShowSidebar ? 'mini-sidebar' : ''} ${isShowSidebarMobile ? 'show-sidebar' : ''}`}>
            <div className="header__bg purple" />
            <Header />
            <div className="container-wrap">
                <Sidebar />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <Suspense fallback={''}>
                            <Switch >
                                {ADMIN.map((data, idx) => (
                                    <Route exact key={idx} path={data.path}>
                                        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                            <Breadcrumb router={ADMIN} title={data.label} />
                                            <data.component />
                                        </Animated>
                                    </Route>
                                ))}
                                <Route component={PageNotFound} />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContainerAdmin;



