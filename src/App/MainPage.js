import React from 'react';
import Container from './Container';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

const MainPage = (props) => {
    return (
        <div>
            <Header />
            <Container />
            <Footer />
        </div>
    );
}

export default MainPage;