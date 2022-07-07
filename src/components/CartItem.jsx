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
    const handleRemoveItem = ()=> removeItem(bookObj);
    return (
        <div className={`container-md ${classes.dataRow}`}>
            <i className={`${classes.removeIcon} fa-solid fa-xmark col-1`} onClick={handleRemoveItem}></i>
            {
                props.img.includes('google') ? <img className={`${classes.row__img} `} src={props.img}/> :
                    <img className={`${classes.row__img} `} src={require(`../images${props.img}`)}/>
            }
            { props.img.includes('google')?
                <Link className={`${classes.row__title} col-xl-4 col-md-3 `} to={`/apiSearch/${bookObj.id}`} state = {bookObj}>
                    <a >{props.title}</a>
                </Link>:
            <Link className={`${classes.row__title} col-xl-4 col-md-3 `} to={`/details/${bookObj.id}`} state = {bookObj}>
                <a >{props.title}</a>
            </Link>}
            <p className={`${classes.row_price}`}>${Number.parseFloat(props.price).toFixed(2)}</p>
            <div className={`col-xl-1 col-md-2 m-auto`}>
                <QuantityButton book={bookObj}/>
            </div>
            <span className={`${classes.row_price}`}>${Number.parseFloat(+props.quantity * +props.price).toFixed(2)}</span>
        </div>
    )
}
export default CartItem;