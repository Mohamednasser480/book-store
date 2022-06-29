import './App.module.css';
import {Routes,Route} from 'react-router-dom'
// Import components
import Home from "./components/Home"
import Blog from "./components/Blog"
import Event from "./components/Event"
import Contact from "./components/Contact"
import Error from "./components/Error"
import NavBar from "./components/NavBar";
import Details from "./components/Details";
// Import style file


function App() {
  return (
      <>
        <NavBar/>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/event" element={<Event/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/*" element={<Error/>}></Route>
          </Routes>
      </>
  );
}
export default App;
