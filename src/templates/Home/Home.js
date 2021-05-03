import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dataLogin = useSelector(state => state.accountReducer);
    const { error, login } = dataLogin;

    console.log("login", login)

    return (
        <div className="home">
            Day la home
        </div>
    )
}

export default Home
