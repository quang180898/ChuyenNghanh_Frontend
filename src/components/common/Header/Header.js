import { Input, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';

const { Search } = Input;
const { SubMenu } = Menu;

const Header = (props) => {
    const onSearch = value => console.log(value);
    const handleClick = (e) => {
        console.log('click ', e);
    };
    return (
        <div className="background">
            <div className="container">
                <div className='header'>
                    <div className="header__logo">Library</div>
                    <div className="header__menu">
                        <Menu onClick={(e) => handleClick(e.key)} mode="horizontal">
                            <SubMenu key="SubMenu" icon={<UnorderedListOutlined />} >
                                <Menu.ItemGroup >
                                    <Menu.Item key="1">Home</Menu.Item>
                                    <Menu.Item key="2">Admin</Menu.Item>
                                    <Menu.Item key="3">About</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="header__search">
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>
                    <div className="header__login">
                        <a href="">Login</a>/
                        <a href="">Sign In</a>
                    </div>
                    <div className="cart">
                        <div className="cart__number">
                            <i className="las la-shopping-cart cart__number--cartIcon" />
                            <span class="cart__number--num"><span>1</span></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;