import {Nav} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import styleClasses from './NavBar.module.css'
function NavBar() {
    return (
        <div className={'d-flex justify-content-between  py-4'}>
            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 className={`${styleClasses.navContainer} mx-5`}>
                <Nav.Item>
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/logo.png"/>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/home" className='ms-4'>home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/blog">blog</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/event">event</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/contact">contact us</NavLink>
                </Nav.Item>
            </Nav>
            <div className={`${styleClasses.cartContainer} me-5`}>
                <div className={ `${styleClasses.cart}`}>
                    <i className={`fa-solid fa-bag-shopping fs-3 ${styleClasses.cartIcon} ${styleClasses.icon}`}>
                        <span className={`${styleClasses.itemsCount}`}>0</span>
                    </i>
                <span className={`${styleClasses.price} ms-2`}>$ 0.00</span>
                </div>
                <span className={`m-3`}>|</span>
                <i className={`fa-solid fa-magnifying-glass fs-5 ${styleClasses.icon}`}></i>
                <span className={`m-3`}>|</span>

            </div>
        </div>
    );
}

export default NavBar;