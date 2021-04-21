import React, { useState, useEffect } from 'react';

const Header = (props) => {

    return (
    
        <header className='header'>
            <div className="header__logo">
                <img src="../images/library.jpg" className="logo" />
            </div>
            <div className="header__menu">
                <span class="fa fa-bars"></span>
                <ul>
                    <li class="fa fa-user icon"></li>
                    <li class="fa fa-cogs icon"></li>
                    <li class="fa fa-paper-plane icon"></li>
                    <li class="fa fa-pie-chart icon"></li>
                </ul>
            </div>
            <div className="header__search">
                <div>Search</div>
            </div>
            <div className="header__login">
                <div>Login</div>
            </div>
            <div className="header__cart">
                <div>Gio hang</div>
            </div>
        </header>


    )
}

export default Header;