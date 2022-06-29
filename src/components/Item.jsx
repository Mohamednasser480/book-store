import classes from "./Item.module.css"
import {useContext, useState} from "react";
import CounterContext from "../Context/CreateContext";
import {NavLink} from "react-router-dom";
function Item(props){
    let {increase} = useContext(CounterContext);
    const [viewBasket,setViewBasket] = useState(false);
    let handleAddToBasket = (e)=>{
        setViewBasket(true);
        // read items from local storage
        let items = localStorage.getItem("items");
        // if item not found initialize it with empty array
        // if founded parse it as json object
        items = items? JSON.parse(items) : [];
        // if the item in the basket add the quantity with 1
        // else add it with quantity = 1
        console.log(items);
        let itemInBasket = false;
        for(let item of items)
            if(item.id == props.id){
                itemInBasket = true;
                item.quantity += 1;
            }
        // if the item was not founded in the array items add it
        if(!itemInBasket) items.push({id:props.id , quantity:1});
        // stringify the items array and add it in the local storage
        localStorage.setItem("items",JSON.stringify(items));

        increase(1, props.price);
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
                    // to={`/details/${props.id}
                    <NavLink to={`/cart`}
                             className={`text-decoration-none`}
                    >
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
