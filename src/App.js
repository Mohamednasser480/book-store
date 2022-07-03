import './App.module.css';
import {Routes,Route} from 'react-router-dom'
import CounterContext from "./Context/CreateContext";
import {useContext, useEffect} from "react";
// Import components
import Home from "./components/Home"
import Blog from "./components/Blog"
import Event from "./components/Event"
import Contact from "./components/Contact"
import Error from "./components/Error"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"
import {setItems} from "./helper/localStorageHandler";
import Footer from "./components/Footer";
import Details from "./components/Details";
// Import style file
let initial = true;
function App() {
    let {cartItems} = useContext(CounterContext);

    useEffect(()=>{
         if(cartItems.length !== 0 || (cartItems.length === 0 && !initial)) {
             setItems(cartItems);
             initial = false;
         }
    },[cartItems])
  return (
      <>
          <NavBar/>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/event" element={<Event/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/details/:book" element={<Details/>}/>
            <Route path="/*" element={<Error/>}></Route>
          </Routes>
          <Footer/>
      </>
  );
}
export default App;
