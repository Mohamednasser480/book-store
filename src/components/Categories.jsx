import Button from './UI/Button'
import classes from './Categories.module.css'
function Categories(){
    return (<div className={` ${classes.categoriesContainer} col-10`}>
        <Button className={classes.categoriyButton}>all</Button>
        <Button className={classes.categoriyButton}>best seller</Button>
        <Button className={classes.categoriyButton}>fantasy</Button>
        <Button className={classes.categoriyButton}>history</Button>
        <Button className={classes.categoriyButton}>art</Button>
        <Button className={classes.categoriyButton}>love stories</Button>
    </div>)
}
export default Categories;