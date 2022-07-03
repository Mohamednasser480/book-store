import classes from "./Item.module.css"
import {useContext, useState} from "react";
import CounterContext from "../Context/CreateContext";
import {NavLink} from "react-router-dom";

function Item(props){
    let {increase} = useContext(CounterContext);

    const [viewBasket,setViewBasket] = useState(false);
    let handleAddToBasket = (e)=>{
        setViewBasket(true);
        increase({
            id: props.id,
            img:props.img,
            author:props.author,
            price: props.price,
            title:props.title
      });
    }
    return (
        <div className={`${classes.book} ${props.className}`}>
            <img className={classes.book__img} src={require('../images'+props.img)}/>
            <h4 className={classes.item__author}>{props.author}</h4>
            <p className={classes.item__bookName}>{props.title}</p>
            <p className={classes.item__price}>${props.price}</p>
            <div className={`${classes.book__shadow}`}>
                <div className={classes.shadow__textContainer}>
                {(!viewBasket)?
                    <p className={classes.shadow__text} onClick={handleAddToBasket}>
                        add to basket
                        <div className={classes.shadow__textUnderLine}></div>
                    </p>:
                    <NavLink to={`/cart`}
                             className={`text-decoration-none`}
                    >
                     <p className={classes.shadow__text}>
                         view basket
                         <div className={classes.shadow__textUnderLine}></div>
                     </p>
                    </NavLink>
                }
                </div>
            </div>
        </div>
    )
}
export default Item;
