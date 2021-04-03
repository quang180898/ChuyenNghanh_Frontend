import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { commonAction } from '../../../store/actions';
import { IMAGE_URL, PAGES_URL } from '../../../contant';

const Header = (props) => {
    const { onClick, title } = props;
    const dispatch = useDispatch();

    const [toggleUserSetting, setToggleUserSetting] = useState()
    const [toggleUserHeader, setToggleUserHeader] = useState()

    const store = useSelector(state => state.commonReducer)
    const { display } = store

    useEffect(() => {
        if (title) {
            dispatch(commonAction.setTitleHeader(title))
        }
    }, [title])

    //event resize hide sidebar
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1201;
            dispatch(commonAction.toggleLeftSidebar(!ismobile))

        }, false);
    }, []);

    //event load page hide sidebar
    useEffect(() => {
        window.addEventListener("load", () => {
            const ismobile = window.innerWidth < 1201;
            dispatch(commonAction.toggleLeftSidebar(!ismobile))
        }, false);
    }, []);

    const toggleSidebar = () => {
        dispatch(commonAction.toggleLeftSidebar(!display))
    }

    const clickSetToggleUserSetting = () => {
        setToggleUserSetting(!toggleUserSetting);
    }

    const clickToggleUserHeader = () => {
        setToggleUserHeader(!toggleUserHeader);
    }

    return (
        <header className='header d-flex align-items-center'>
            <div className={`sidebar__logo ${display ? "" : "hide"}`}>
                <a href="#" className="link">
                    <img className="logo_with_text" src={`${IMAGE_URL}images/logo.png`} alt="vlogo" />
                </a>
                <div className="sidebar__toggle_icon" onClick={() => toggleSidebar()}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div className="header_text_center" >
                <i className="icon las la-cog" onClick={() => clickToggleUserHeader()} />
            </div>
            <div className={`user ${toggleUserHeader ? "active" : ""}`}>
                <div className="user__langs">
                    <figure className="user__langs--img">
                        <img src={`${IMAGE_URL}images/lang_vn.jpg`} alt="lang" />
                    </figure>
                    <div className="user__langs--select">
                        <span className="user__langs--selected dropdown-toggle" data-toggle="dropdown">VN</span>
                        <ul className="user__langs--list dropdown-menu">
                            <li>
                                <figure className="icon">
                                    <img src={`${IMAGE_URL}images/lang_vn.jpg`} alt="lang" />
                                </figure>
                                    VN
                                </li>
                            <li>
                                <figure className="icon">
                                    <img src={`${IMAGE_URL}images/lang_en.png`} alt="lang" />
                                </figure>
                                    VN
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="user__notification">
                    <div className="item user__conversation active">
                        <i className="icon fas fa-comments" />
                        <i className="number">17</i>
                    </div>
                </div>
                <div className="user__wrap d-flex" onClick={() => clickSetToggleUserSetting()}>
                    <figure className="user__avatar">
                        <img src={`${IMAGE_URL}images/avt_admin.jpg`} alt="avatar user" />
                    </figure>
                    <div className="user__info">
                        <span className="name">Nguyễn Tấn An</span>
                        <span className="position">scb-test@gmail.com</span>
                    </div>
                </div>
                <div className={`user__actions ${toggleUserSetting ? "active" : ""}`}>
                    <ul>
                        <li>
                            <Link to={PAGES_URL.profile.url}>
                                <i className="icon fas fa-user" />
                                    My Profile
                            </Link>
                        </li>
                        <li className="log-out">
                            <a href="#">
                                <i className="icon fas fa-sign-out-alt" />
                                    Logout
                                </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Header;