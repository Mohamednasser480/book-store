import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Title from "./UI/Title";
import classes from "./Details.module.css";
import Button from "./UI/Button";
import quantityBtnClasses from "./QuantityButton.module.css";
import {useContext} from "react";
import {CartContext} from "../Context/CreateContext";
let isAddedItem = 1;
let q , title;
const ApiSearch = () => {
    let {book} = useParams();
    let [bookData,setbookData] = useState('');
    const [quantity , setQuantity] = useState(1);
    const {increase} = useContext(CartContext);
    let getData = async()=>{
        let bookResponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&startIndex=0`);
        const validBook = getFirstValid(bookResponse.data.items);
        if(validBook)
            setbookData({
                id:validBook.id,
                price:validBook.saleInfo.listPrice.amount,
                author:validBook.volumeInfo.authors[0],
                title:validBook.volumeInfo.title,
                img:validBook.volumeInfo.imageLinks.thumbnail,
                description:validBook.volumeInfo.description.substr(0,500)
            });
        else setbookData(false);

    }
    const getFirstValid = (bookData)=>{
        for(const book of bookData){
            if(book.id && book.saleInfo && book.saleInfo.listPrice && book.saleInfo.listPrice.amount &&
            book.volumeInfo && book.volumeInfo.authors && book.volumeInfo.title && book.volumeInfo.imageLinks&&
            book.volumeInfo.imageLinks.thumbnail && book.volumeInfo.description) return book;
        }
        return false;
    }
    const handleIncreaseICon = ()=> setQuantity( (quantity)=> quantity+1);
    const handleDecreaseICon = ()=> {
        if(quantity > 1)
            setQuantity((quantity) => quantity - 1);
    }
    const addToBasket = ()=> {
        q = quantity;
        title = bookData.title;
        isAddedItem = 2;
        increase(bookData, quantity);
        setQuantity(0);
        window.scrollTo(0, 0)
    }
    useEffect(()=>{
        getData();
    },[book]);

    return (
        <> {(bookData)?<>
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
                    <img src={bookData.img} alt=""/>
                </div>
                <div className={`col-md-1`}></div>
                <div className={`m-auto m-lg-0 col-10 col-lg-7`}>
                    <p className={`${classes.Details__author}`}>by {bookData.author}</p>
                    <p className={`${classes.Details__title}`}>{bookData.title}</p>
                    <p className={`${classes.Details__price}`}>${Number.parseFloat(bookData.price).toFixed(2)}</p>
                    <p className={`${classes.Details__description}`}>{bookData.description}</p>
                    <div className={` d-flex flex-column flex-md-row col-7 col-md-12 pt-3`}>
                        <div className={` ${quantityBtnClasses.buttonContainer} mb-4 me-md-4`}>
                            <span className={`${quantityBtnClasses.quantity}`}>{'Quantity'}</span>
                            <i className={`${quantityBtnClasses.buttonIcon} fa-solid fa-angle-left`} onClick={handleDecreaseICon}></i>
                            <span className={`${quantityBtnClasses.quantity}`}>{quantity}</span>
                            <i className={`${quantityBtnClasses.buttonIcon} fa-solid fa-angle-right`} onClick={handleIncreaseICon}></i>
                        </div>
                        <Button onClickhandler={addToBasket} className ={`mb-4 px-2 px-md-3`}>add to basket</Button>
                    </div>
                </div>
            </div></> : <div className={`col-10 ${classes.messageContainer}`}>
            <p>{` Can not Found Result to " ${book}" `}</p>
            <Link to={'/home'}>
                <Button>go to home</Button>
            </Link>
        </div>}
            }
        </>

    )
};

export default ApiSearch;