import classes from "./Item.module.css"
import {useContext, useState} from "react";
import {CartContext}  from "../Context/CreateContext";
import {Link} from "react-router-dom";

function Item(props){
    let {increase} = useContext(CartContext);

    const [viewBasket,setViewBasket] = useState(false);
    const bookObj ={
        id: props.id,
        img:props.img,
        author:props.author,
        price: props.price,
        title:props.title
    }
    let handleAddToBasket = (e)=>{
        setViewBasket(true);
        increase(bookObj);
    }
    return (
        <div className={`${classes.book} ${props.className}`}>
            <div className={`${classes.imgContainer}`}>
                <img className={classes.book__img} src={require('../images'+props.img)}/>
                <div className={`${classes.book__shadow}`}>

                    <div className={classes.shadow__textContainer}>
                    {(!viewBasket)?
                        <p className={classes.shadow__text} onClick={handleAddToBasket}>
                            add to basket
                            <div className={classes.shadow__textUnderLine}></div>
                        </p>:
                        <Link to={`/cart`}
                              className={`text-decoration-none`}
                        >
                            <p className={classes.shadow__text}>
                                view basket
                                <div className={classes.shadow__textUnderLine}></div>
                            </p>
                        </Link>
                    }
                </div>
            </div>
                </div>

            <h4 className={classes.item__author}>{props.author}</h4>
            <Link className={classes.item__bookName} to={`/details/${bookObj.id}`}
                  state = {bookObj}
            >
                <p >{props.title}</p>
            </Link>
            <p className={classes.item__price}>${Number.parseFloat(props.price).toFixed(2)}</p>


        </div>
    )
}
export default Item;
