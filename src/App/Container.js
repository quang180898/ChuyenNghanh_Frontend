//libs
import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory, withRouter, Link, useLocation, matchPath, Redirect, useParams } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from 'react-animated-css';
import PageNotFound from 'templates/ErrorPage/PageNotFound';
import { PAGES_URL } from 'contant';
import { getLocalStore, removeEmptyFromObj, showNotification, TOKEN } from 'functions/Utils';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { bookAction } from 'store/action';

const Container = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const urlCurrent = location.pathname.split('/')[1]

    const store = useSelector(state => state.bookReducer)
    // const { addAccount } = store;

    // useEffect(() => {
    //     if (addAccount) {
    //         if (addAccount.success) {
    //             showNotification.success({ message: 'Thanh toán sách thành công', title: 'success' })
    //         } else {
    //             showNotification.error({ message: addAccount.detail, title: 'error' })
    //         }
    //     }
    // }, [addAccount])

    useEffect(() => {
        if(urlCurrent === "notify") {
            const payment = getLocalStore('payment')
            const user = getLocalStore('user')
            let data = {
                book_id: parseInt(payment.id),
                user_id: parseInt(user.customer_id),
                date_borrow:  moment().format("DD/MM/YYYY HH:mm:ss"),
                date_return: moment().add(6, 'days').format("DD/MM/YYYY HH:mm:ss"),
            }
            const params = removeEmptyFromObj(data);
            if (params) {
                dispatch(bookAction.createAccountBook(params))
            }
        }
    },[urlCurrent])


    return (
        <div className="container-fluid">
            <Suspense fallback={''}>
                <Switch >
                    {TOKEN == null
                        &&
                        <Redirect from={"/profile/:id"} to={PAGES_URL.login.url} />
                    }
                    {MAIN.map((data, idx) => (
                        <Route exact key={idx} path={data.path}>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <data.component />
                            </Animated>
                        </Route>
                    ))}
                    <Redirect from={PAGES_URL.payment.url} to={PAGES_URL.home.url} />
                    <Redirect from={PAGES_URL.notify.url} to={PAGES_URL.home.url} />
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default Container;



