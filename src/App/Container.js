//libs
import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory, withRouter, Link, useLocation, matchPath, Redirect } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from 'react-animated-css';
import { CardBook } from 'components/common/CardBook';
import { SliderImg } from 'components/common/Slider';

const data = [
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: 'http://placekitten.com/g/400/200',
    },
]

const Container = () => {
    return (
        <div className="container">
            <div className="home ">
                <div className="home__slider">
                    <SliderImg
                        datas={data}
                    />
                </div>
                <div className="home__content">
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
    </div>
    );
}

export default Container;



