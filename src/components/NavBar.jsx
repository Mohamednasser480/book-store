import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {CartContext}  from "../Context/CreateContext";
function CollapsibleExample() {
    let {cartCount, price} = useContext(CartContext);
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
                                <span className={`${classes.price} ms-2`}>$ {price+'.00'}</span>
                            </div>
                        </NavLink>
                        <Nav.Link>
                            <span className={`m-3 text-dark`}>|</span>
                            <i className={`fa-solid fa-magnifying-glass fs-5 ${classes.icon}`}></i>
                            <span className={`m-3 text-dark`}>|</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;