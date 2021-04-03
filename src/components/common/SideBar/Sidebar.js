import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { PAGES_URL } from '../../../contant';

const SideBar = (props) => {
    const store = useSelector(state => state.commonReducer)
    const { display } = store


    return (
        <nav className={`sidebar ${display ? "" : "hide"}`}>
            <div className="sidebar__wrap">
                <div className="sidebar__item">
                    <ul className="nav flex-column mt-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to={PAGES_URL.dashboard.url}>
                                <i className="icon fas fa-layer-group" />
                                <span className="text">
                                    Dashboard
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to={PAGES_URL.monitor.url}>
                                <i className="icon fas fa-list-alt" />
                                <span className="text">
                                    Monitoring
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to={PAGES_URL.chat.url}>
                                <i className="icon fas fa-comments" />
                                <span className="text">
                                    Active Chats
                                </span>
                                <span className="number over">99</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to={PAGES_URL.history.url}>
                                <i className="icon fas fa-clock" />
                                <span className="text">
                                    History
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to={PAGES_URL.project.url}>
                                <i className="icon fas fa-folder-open" />
                                <span className="text">
                                    Project
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to={PAGES_URL.chatbot.url}>
                                <i className="icon fas fa-comment-dots" />
                                <span className="text">
                                    Chatbot
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact activeClassName="active" to={PAGES_URL.cif.url}>
                                <i className="icon fas fa-comment-dots" />
                                <span className="text">
                                    CIF
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__footer">
                    <span className="copyright">Copyright @ 2020, Minerva</span>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;