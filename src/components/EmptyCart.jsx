import React from 'react';
import classes from './EmptyCart.module.css';
import Button from "./UI/Button";
import {NavLink} from "react-router-dom";
const EmptyCart = () => {
    return (
        <div className={`d-flex flex-column justify-content-center align-items-center`}>
            <div className={`col-10 ${classes.wrapper}`}>
            Your basket is currently empty.
            </div>
            <NavLink to={'/home'}>
                <Button >return to shop</Button>
            </NavLink>
        </div>
    );
};

export default EmptyCart;