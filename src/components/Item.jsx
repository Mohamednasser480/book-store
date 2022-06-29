import classes from "./Item.module.css"
import {useState} from "react";
import {NavLink} from "react-router-dom";
function Item(props){
    const [viewBasket,setViewBasket] = useState(false);
    let handleAddToBasket = ()=>{
        setViewBasket(true);
    }
    let handleViewBasket= ()=>{
        console.log('View basket');
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
                    <NavLink to={`/details/${props.id}`} className={`text-decoration-none`}>
                     <p className={classes.shadow__text} onClick={handleViewBasket}>
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
