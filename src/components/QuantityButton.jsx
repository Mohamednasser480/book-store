import classes from './QuantityButton.module.css'
import {useContext} from "react";
import CounterContext from "../Context/CreateContext";
function QuantityButton (props){
    let {increase,decrease} = useContext(CounterContext);
    const handleDecreaseICon = ()=>{
        if(props.book.quantity > 1)
            decrease(props.book);
    }
    const handleIncreaseICon =()=> increase(props.book);
    return (
        <div className={classes.buttonContainer}>
            <i className={`${classes.buttonIcon} fa-solid fa-angle-left`} onClick={handleDecreaseICon}></i>
            <span className={`${classes.quantity}`}>{props.book.quantity}</span>
            <i className={`${classes.buttonIcon} fa-solid fa-angle-right`}onClick={handleIncreaseICon}></i>
        </div>
    )
}
export default QuantityButton;