import CounterContext from "./CreateContext";
import {useEffect, useState} from "react";
function CartContextProvider(props){
    const [cartCount, setCartCount] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(()=>{
        let items = localStorage.getItem("items");
        items = JSON.parse(items);
        items = items || [];
        let c = 0;
        for( let item of items) c += item.quantity;
        setCartCount(c);
    })
    let increase = (quantity,bookPrice) => {
        setCartCount(cartCount + quantity);
        setPrice(price + bookPrice * quantity);
    }
    let decrease = ()=> setCartCount(cartCount - 1);
    return (
        <CounterContext.Provider value = { {cartCount,price, increase, decrease} }>
            {props.children}
        </CounterContext.Provider>
    )

}
export default CartContextProvider;