import CounterContext from "./CreateContext";
import {useEffect, useState} from "react";
import {getItems} from '../helper/localStorageHandler';
import data from "../data"
function CartContextProvider(props){
    const [cartCount, setCartCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [cartItems,setCartItems] = useState([]);
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
    return (
        <CounterContext.Provider value = { {cartCount,price, increase, decrease, removeItem, cartItems} }>
            {props.children}
        </CounterContext.Provider>
    )

}
export default CartContextProvider;