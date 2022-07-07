import classes from './CartItem.module.css'
import QuantityButton from './QuantityButton'
import {CartContext}  from "../Context/CreateContext";
import {useContext} from "react";
import {Link} from "react-router-dom";
function CartItem(props){
    let {removeItem} = useContext(CartContext);
    const bookObj = {
        id: props.id,
        img:props.img,
        author:props.author,
        price: props.price,
        title:props.title,
        quantity: props.quantity
    };

    // to change the total price from the child component
    // operation = {1 ,-1}
    // 1 if increase -1 if Decrease
    console.log('author = ', bookObj.author);
    const handleRemoveItem = ()=> removeItem(bookObj);
    return (
        <div className={`container-md ${classes.dataRow}`}>
            <i className={`${classes.removeIcon} fa-solid fa-xmark col-1`} onClick={handleRemoveItem}></i>
            <img className={`${classes.row__img} `} src={require(`../images${props.img}`)}/>

            <Link className={`${classes.row__title} col-xl-4 col-md-3 `} to={`/details/${bookObj}`} state = {bookObj}>
                <a >{props.title}</a>
            </Link>
            <p className={`${classes.row_price}`}>${+props.price.toString()+'.00'}</p>
            <div className={`col-xl-1 col-md-2 m-auto`}>
                <QuantityButton book={bookObj}/>
            </div>
            <span className={`${classes.row_price}`}>${(props.quantity * props.price).toString() + '.00'}</span>
        </div>
    )
}
export default CartItem;