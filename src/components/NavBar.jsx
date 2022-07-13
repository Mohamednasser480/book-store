import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css'
import {Link, NavLink} from "react-router-dom";
import {useContext, useState} from "react";
import {CartContext}  from "../Context/CreateContext";
function CollapsibleExample() {
    let {cartCount, price} = useContext(CartContext);
    const [showSearch,setShowSearch] = useState(false);
    const [searchVal, setSearchVal] = useState('');
    const handleSearch = ()=>{
        setShowSearch((prv) => !prv)
    }
    const handleInputSearch = (e)=> setSearchVal(e.target.value);
    return (
        <Navbar collapseOnSelect expand="md" bg="white" variant="dark">
            <Container className={`${classes.myNav}`}>
                <Navbar.Brand className={`me-0`}>
                    <NavLink to={'/home'}>
                        <img className={classes.logo} src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/logo.png"/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={`bg-black bg-opacity-75 fs-5`} />
                <Navbar.Collapse id="responsive-navbar-nav" className={`${classes.dropIcon}`}>
                    <Nav className="me-auto">
                        <Nav.Link >
                            <NavLink className={`${classes.navLink}`} to={'/home'}>home</NavLink>
                        </Nav.Link>
                        <Nav.Link  to={"blog"}>
                            <NavLink className={`${classes.navLink}`} to={'/blog'}>blog</NavLink>
                        </Nav.Link>
                        <Nav.Link  href="event">
                            <NavLink className={`${classes.navLink}`} to={'/event'}>event</NavLink>
                        </Nav.Link>
                        <Nav.Link  href="contact">
                            <NavLink className={`${classes.navLink}`} to={'/contact'}>contact us</NavLink>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <NavLink className={`text-decoration-none d-flex align-items-center`} to={'/cart'}>
                            <div className={ `${classes.cart}`}>
                            <i className={`fa-solid fa-bag-shopping fs-3 ${classes.cartIcon} ${classes.icon}`}>
                                <span className={`${classes.itemsCount}`}>{cartCount}</span>
                            </i>
                                <span className={`${classes.price} ms-2`}>$ { price.toFixed(2)}</span>
                            </div>
                        </NavLink>
                        <Nav.Link className={`position-relative`}>
                            <span className={`m-3 text-dark`}>|</span>
                            <i className={`fa-solid fa-magnifying-glass fs-5 ${classes.icon}`} onClick={handleSearch}>
                            </i>
                            <div className={`${classes.container} ` + `${showSearch?'d-flex':'d-none'}`}>
                                <div className={`d-flex justify-content-between align-items-center ${classes.search}`}>
                                    <input type="text" placeholder={'Search'} onChange={handleInputSearch}/>
                                    <Link className={classes.go} to={`/apiSearch/${searchVal}`}>
                                        <span>GO</span>
                                    </Link>
                                </div>
                            </div>
                            <span className={`m-3 text-dark`}>|</span>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;