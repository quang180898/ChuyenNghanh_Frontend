import React, { lazy } from 'react';
import { PAGES_URL } from './contant';

const Login = lazy(() => import('./templates/Account/Login'));
const ForgotPassword = lazy(() => import('./templates/Account/ForgotPassword'));
const Register = lazy(() => import('./templates/Account/Register'));
const Home = lazy(() => import('./templates/Home/Home'));
const Profile = lazy(() => import('./templates/Profile/Profile'));
const Admin = lazy(() => import('./templates/Admin/Admin'));

const LOGINS = [
    {
        "path": PAGES_URL.login.url,
        "component": Login
    },
    {
        "path": PAGES_URL.forgotPassword.url,
        "component": ForgotPassword
    },
    {
        "path": PAGES_URL.register.url,
        "component": Register
    },
]

const MAIN = [
    {
        "path": PAGES_URL.home.url,
        "component": Home
    },
    {
        "path": PAGES_URL.home.url + "category/:categoryId",
        "component": Home
    },
    {
        "path": PAGES_URL.profile.url + "/:accountId",
        "component": Profile
    },
]

const getPathList = (DATA) => {
    var list = []
    for (var i = 0; i < DATA.length; i++) {
        if (DATA[i]) {
            list.push(DATA[i].path)
        }
    }
    return list
}

export { MAIN,LOGINS, getPathList }
