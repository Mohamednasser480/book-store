import Button from './UI/Button'
import classes from './items.module.css'
function Categories(){
    return (<div className={` ${classes.categoriesContainer} col-10`}>
        <Button className={classes.categoriyButton} id={"all"}>all</Button>
        <Button className={classes.categoriyButton} id={"bestSeller"}>best seller</Button>
        <Button className={classes.categoriyButton} id={"fantasy"}>fantasy</Button>
        <Button className={classes.categoriyButton} id={"history"}>history</Button>
        <Button className={classes.categoriyButton} id={"art"}>art</Button>
        <Button className={classes.categoriyButton} id={"love"}>love stories</Button>
    </div>)
}
export default Categories;