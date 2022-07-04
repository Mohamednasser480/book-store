import classes from './Details.module.css'
import {Link, useLocation} from "react-router-dom";
import Title from './UI/Title'
import Button from "./UI/Button";
import quantityBtnClasses from "./QuantityButton.module.css";
import {useContext, useState} from "react";
import CounterContext from "../Context/CreateContext";
let isAddedItem = 1;
let q , title;
function Details(){
    const {increase} = useContext(CounterContext);
    const location = useLocation()
    const book = location.state;
    const [quantity , setQuantity] = useState(1);
    const handleIncreaseICon = ()=> setQuantity( (quantitiy)=> quantitiy+1);
    const handleDecreaseICon = ()=> {
        if(quantity > 1)
            setQuantity((quantity) => quantity - 1);
    }
    const addToBasket = ()=> {
        q = quantity;
        title = book.title;
        isAddedItem = 2;
        increase(book, quantity);
        setQuantity(1);
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Title title="product" subtitle="shop list"></Title>
            {(isAddedItem-- > 0)?
            <div className={`col-10 ${classes.messageContainer}`}>
                <p>{` ${q}x "${title}" have been added to your basket.`}</p>
                <Link to={'/cart'}>
                    <Button>view basket</Button>
                </Link>
            </div>:''}
            <div className={`${classes.Details__container}`}>
                <div className={`${classes.Details__left} col-5`}>
                    <img src={require(`../images${book.img}`)} alt=""/>

                </div>
                <div className={` col-7`}>
                    <p className={`${classes.Details__author}`}>by {book.author}</p>
                    <p className={`${classes.Details__title}`}>{book.title}</p>
                    <p className={`${classes.Details__price}`}>${book.price}</p>
                    <p className={`${classes.Details__description}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem culpa dolorem doloremque earum est exercitationem itaque libero maxime minima modi mollitia nemo nulla officia omnis quas qui quibusdam sapiente sed sit tempore, ut vitae. At, cum debitis eius eos facere in iure labore nam natus nulla officiis provident? Neque.</p>
                    <div className={`col-7 d-flex justify-content-between pt-4`}>
                        <div className={quantityBtnClasses.buttonContainer}>
                            <span className={`${quantityBtnClasses.quantity} pe-5`}>{'Quantity'}</span>
                            <i className={`${quantityBtnClasses.buttonIcon} fa-solid fa-angle-left`} onClick={handleDecreaseICon}></i>
                            <span className={`${quantityBtnClasses.quantity}`}>{quantity}</span>
                            <i className={`${quantityBtnClasses.buttonIcon} fa-solid fa-angle-right`}onClick={handleIncreaseICon}></i>
                        </div>
                        <Button onClickhandler={addToBasket}>add to basket</Button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Details;