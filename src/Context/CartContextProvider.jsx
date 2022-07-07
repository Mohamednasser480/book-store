import {CartContext}  from "./CreateContext";
import {useEffect, useState} from "react";
import {getItems} from '../helper/localStorageHandler';
import data from "../data"
import commentsData from "../comments";
function CartContextProvider(props){
    const [cartCount, setCartCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [cartItems,setCartItems] = useState([]);
    const [comments,setComments] = useState(commentsData);
    useEffect(()=>{
        // map cart item To product Item to get all product information
        const cardItemsInfo=[];
        let numberOfIntance = 0;
        let totalPrice = 0;
        const cartItems = getItems();
        for(let itemOfData of data)
            for(let cartItem of cartItems)
                if(cartItem.id === itemOfData.id) {
                    itemOfData.quantity = cartItem.quantity;
                    itemOfData.price = +itemOfData.price;
                    cardItemsInfo.push(itemOfData);
                    numberOfIntance += cartItem.quantity;
                    totalPrice += parseInt(cartItem.quantity)
                            * parseInt(itemOfData.price);

                    break;
                }
        setCartItems(cardItemsInfo);
        setCartCount(numberOfIntance);
        setPrice(totalPrice);
    },[])
    let increase = (book,numOfInstance=1) => {
        const itemIndex = cartItems.findIndex((item)=>item.id === book.id);
        const newCart = [...cartItems];
        if(itemIndex === -1){
            book.quantity = numOfInstance;
            newCart.push(book);
        }else
            newCart[itemIndex].quantity+=numOfInstance;

        setCartItems(newCart);
        setCartCount((cartCount)=>cartCount + numOfInstance)
        setPrice((price)=> price + (+book.price * numOfInstance));
    }

    let decrease = (book)=>{
        const indexToDelete = cartItems.findIndex(item=>item.id === book.id);
        const newItems = [...cartItems];
        newItems[indexToDelete].quantity--;
        if(!newItems[indexToDelete].quantity)
            newItems.splice(indexToDelete,1);

        setPrice((price)=> price - book.price);
        setCartCount((cartCount)=>cartCount - 1);
        setCartItems(newItems);
    }

    let removeItem = (book)=>{
        const newItems = cartItems.filter( item => item.id !== book.id);
        setCartCount((cartCount)=>cartCount - book.quantity);
        setPrice((price)=> price - (book.price * book.quantity));
        setCartItems(newItems);
    }
    const addComment = (comment)=> {
        comment.img='https://secure.gravatar.com/avatar/add8d2cc0aacaebcc8637f639d0a9d00?s=96&d=mm&r=g';
        const d = new Date();
        const year = d.getFullYear();
        const day = d.getDate();
        console.log(d,day);
        const month = d.toLocaleString('en-US', { month: 'long' });
        //  JULY 29, 2019
        comment.date = `${month} ${day}, ${year}`;
        setComments(prv => [...prv, comment]);
    }
    const getComments = ()=> comments;
    return (
        <CartContext.Provider value = { {cartCount,price, increase, decrease, removeItem, cartItems,comments,addComment,getComments} }>
            {props.children}
        </CartContext.Provider>
    )

}
export default CartContextProvider;