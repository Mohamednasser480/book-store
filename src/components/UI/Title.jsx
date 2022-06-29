import classes from "./Title.module.css";
function Title (props){
    return(
    <div className={`${classes.title__img}`}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.subtitle}>{props.subtitle}</p>
    </div>
    )
}
export default Title;