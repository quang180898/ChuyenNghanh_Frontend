import { Footer } from 'components/common/Footer';
import { Header } from 'components/common/Header';
import React, { useState, useEffect } from 'react';
import Container from './Container';

const MainPage = (props) => {
    return (
        <>
            <Header />
            <Container />
            <Footer/>
        </>
    );
}

export default MainPage;