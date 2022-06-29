import classes from "./Item.module.css"
function Item(props){
    return (
        <div className={`${classes.book} ${props.className}`}>
            <img className={classes.book__img} src={require('../images'+props.img)}/>
            <h4 className={classes.item__author}>{props.author}</h4>
            <p className={classes.item__bookName}>{props.title}</p>
            <p className={classes.item__price}>${props.price}</p>
        </div>
    )
}
export default Item;
