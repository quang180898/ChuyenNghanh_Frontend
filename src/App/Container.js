//libs
import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory, withRouter, Link, useLocation, matchPath, Redirect } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from 'react-animated-css';
import { CardBook } from 'components/common/CardBook';

const Container = () => {
    return (
        <>
        <div className="home">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <CardBook
                        title="Ten Sach"
                        book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12">
                    <CardBook
                        title="Ten Sach"
                        book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12">
                    <CardBook
                        title="Ten Sach"
                        book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <CardBook
                        title="Ten Sach"
                        book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <CardBook
                        title="Ten Sach"
                        book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <CardBook
                        title="Ten Sach"
                        book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    />
                </div>
            </div>
        </div>
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
    </>
    );
}

export default Container;
