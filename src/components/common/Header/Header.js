import { Input, Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { PAGES_URL, SETTING_USER } from 'contant';
import { getLocalStore } from 'functions/Utils';
import { DropdownIcon } from 'components/base/Dropdown';

const { Search } = Input;
const { SubMenu } = Menu;

const Header = (props) => {

    const userLocal = getLocalStore('user')

    const [user, setUser] = useState(userLocal)
    console.log({userLocal})
    const onSearch = value => console.log(value);
    const handleClick = (e) => {
        console.log('click ', e);
    };

    const onChangeMenu = (value) => {
        console.log({value})
        switch(value){
            case 1: 
                return
            case 2:
                return logOut()
        }
    }

    const logOut = () => {
        // xóa data storage 
        getLocalStore('user', true)
        //reload page and auto run /login
        window.location.reload()
    }
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
                        {user ? 
                        <>  
                            <i class="far fa-user mr-2" style={{fontSize: "35px"}}></i>
                            <span className="ItemText">
                                <span>
                                    {user.name}
                                </span>
                                <span>
                                    <DropdownIcon onChangeMenu={(e) => onChangeMenu(e)} options={SETTING_USER}/>
                                </span>
                            </span>
                        </> :  
                        <> 
                            <Link to={PAGES_URL.login.url}>
                                Login/
                            </Link>
                            <Link to={PAGES_URL.register.url}>
                                Sign In
                            </Link> </>
                        }
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