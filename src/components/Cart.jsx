import Title from "./UI/Title";
import CartItem from "./CartItem";
import {CartContext}  from "../Context/CreateContext";
import {useContext} from "react";
import EmptyCart from "./EmptyCart";
import BasketSummary from "./BasketSummary";
function Cart(){
    let {cartItems} = useContext(CartContext);
    return(
        <>
         <Title subtitle='cart'/>
         { (cartItems.length)?
                 <div>
                     {cartItems.map(
                     item => <CartItem
                         key={item.id}
                         id = {item.id}
                         title={item.title}
                         price={item.price}
                         quantity={item.quantity}
                         img={item.img}
                         author={item.author}
                     />)}
                     <BasketSummary/>
                 </div>
            :<EmptyCart/>
         }
        </>
    )
}
export default Cart;