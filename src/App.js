import './App.module.css';
import {Routes,Route} from 'react-router-dom'
// Import components
import Home from "./components/Home"
import Blog from "./components/Blog"
import Event from "./components/Event"
import Contact from "./components/Contact"
import Error from "./components/Error"
import NavBar from "./components/NavBar";
import Slider from "./components/Slider"
import Categories from "./components/Categories";

// Import style file


function App() {
  return (
      <>
        <NavBar/>
         <Slider/>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/event" element={<Event/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
          </Routes>
      </>
  );
}
export default App;
