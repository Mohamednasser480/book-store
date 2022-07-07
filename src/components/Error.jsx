import react from "react"
import classes from "./Error.module.css";
import Button from "./UI/Button";
import {Link} from "react-router-dom";
function Error () {
    return(
    <div className={`${classes.error}`}>
        <h1>404</h1>
        <h3>Page not found</h3>
        <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
        <Link to={'/home'}> <Button className={`${classes.error__button}`}>go to home</Button>
        </Link>

    </div>)
}
export default Error;