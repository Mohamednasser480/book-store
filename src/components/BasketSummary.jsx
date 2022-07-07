import React, {useContext} from 'react';
import Button from "./UI/Button";
import classes from './BasketSummary.module.css'
import {CartContext}  from "../Context/CreateContext";
const BasketSummary = () => {
    const {price} = useContext(CartContext);
    const flatRate = 79;
    return (
        <div className={`container ${classes.summary} d-flex  flex-column flex-lg-row justify-content-between`}>
            <div className={`col-lg-5`}>
                <h2>Basket totals</h2>
                <div className={`${classes.summary__section}`}>
                    <h3 className={`col-8`} >Subtotal</h3>
                    <p className={`col-4`}>${Number.parseFloat(price).toFixed(2)}</p>
                </div>

                <div className={`${classes.summary__section}`}>
                    <h3 className={`col-8`}>Shopping</h3>
                    <div className={`col-4`}>
                        <p>Flat rate:${Number.parseFloat(flatRate).toFixed(2)}</p>
                        <p>Shopping to <span className={`fw-bold`}> Egypt</span></p>
                    </div>
                </div>
                <div className={` ${classes.summary__section}`}>
                    <h3 className={`col-8`}>Total</h3>
                    <p className={`col-4`}>${Number.parseFloat(+price + +flatRate).toFixed(2)}</p>
                </div>
                <Button className={`mt-4`}>proceed to checkout</Button>
            </div>
             <div className={`order-first order-lg-last mb-5`}>
                 <input className={`${classes.summary__input} mb-4`} type="text" placeholder={'coupon code'}/>
                 <Button>apply coupon</Button>
             </div>
        </div>
    );
};

export default BasketSummary;