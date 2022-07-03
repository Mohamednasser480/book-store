import Title from "./UI/Title";
import CartItem from "./CartItem";
import CounterContext from "../Context/CreateContext";
import {useContext} from "react";
import EmptyCart from "./EmptyCart";
function Cart(){
    let {cartItems} = useContext(CounterContext);
    return(
        <>
         <Title subtitle='cart'/>
         { (cartItems.length)?
             cartItems.map(
             item => <CartItem
                title = {item.title}
                price = {item.price}
                quantity={item.quantity}
                img={item.img}
                id={item.id}
             />)

            :<EmptyCart/>
         }
        </>
    )
}
export default Cart;