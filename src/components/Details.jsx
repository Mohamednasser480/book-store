import classes from './Details.module.css'
import {Link, useLocation} from "react-router-dom";
import Title from './UI/Title'
import Button from "./UI/Button";
import quantityBtnClasses from "./QuantityButton.module.css";
import {useContext, useState} from "react";
import {CartContext}  from "../Context/CreateContext";
let isAddedItem = 1;
let q , title;
function Details(){
    const {increase} = useContext(CartContext);
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
            <div className={`container d-lg-flex ${classes.Details__container}`}>
                <div className={`${classes.Details__left} mb-5 col-8 col-lg-4 m-auto`}>
                    <img src={require(`../images${book.img}`)} alt=""/>
                </div>
                <div className={`col-md-1`}></div>
                <div className={`m-auto m-lg-0 col-10 col-lg-7`}>
                    <p className={`${classes.Details__author}`}>by {book.author}</p>
                    <p className={`${classes.Details__title}`}>{book.title}</p>
                    <p className={`${classes.Details__price}`}>${book.price}</p>
                    <p className={`${classes.Details__description}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem culpa dolorem doloremque earum est exercitationem itaque libero maxime minima modi mollitia nemo nulla officia omnis quas qui quibusdam sapiente sed sit tempore, ut vitae. At, cum debitis eius eos facere in iure labore nam natus nulla officiis provident? Neque.</p>
                    <div className={` d-flex flex-column flex-md-row col-7 col-md-12 pt-3`}>
                        <div className={` ${quantityBtnClasses.buttonContainer} mb-4 me-md-4`}>
                            <span className={`${quantityBtnClasses.quantity}`}>{'Quantity'}</span>
                            <i className={`${quantityBtnClasses.buttonIcon} fa-solid fa-angle-left`} onClick={handleDecreaseICon}></i>
                            <span className={`${quantityBtnClasses.quantity}`}>{quantity}</span>
                            <i className={`${quantityBtnClasses.buttonIcon} fa-solid fa-angle-right`}onClick={handleIncreaseICon}></i>
                        </div>
                        <Button onClickhandler={addToBasket} className ={`mb-4 px-2 px-md-3`}>add to basket</Button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Details;