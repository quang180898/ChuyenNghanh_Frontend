import React, { useState, useEffect } from 'react';
import Container from './Container';
import Header from '../components/common/Header/Header';

const MainPage = (props) => {
    return (
       <div>
            <Header/>
            <Container />
       </div>
    );
}

export default MainPage;