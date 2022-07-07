import classes from './QuantityButton.module.css'
import {useContext} from "react";
import {CartContext}  from "../Context/CreateContext";
function QuantityButton (props){
    let {increase,decrease} = useContext(CartContext);
    const handleDecreaseICon = ()=>{
        if(props.book.quantity > 1)
            decrease(props.book);
    }
    const handleIncreaseICon =()=> increase(props.book);
    return (
        <div className={classes.buttonContainer}>
            <i className={`${classes.buttonIcon} fa-solid fa-angle-left`} onClick={handleDecreaseICon}></i>
            <span className={`${classes.quantity} text-center`}>{props.book.quantity}</span>
            <i className={`${classes.buttonIcon} fa-solid fa-angle-right`}onClick={handleIncreaseICon}></i>
        </div>
    )
}
export default QuantityButton;