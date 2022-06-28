import classes from './Slider.module.css'
import Button from '../UI/Button'
function Slider1(){
    return <>
        <div className={` container px-4  ${classes.sliderContainer}`}>
        <div className={classes.left}>
            <h2>it's chapterone</h2>
            <h1>we love literature</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cum cupiditate deleniti iusto laboriosam nisi quam repellat saepe temporibus.</p>
            <Button className={`mt-3`}>read more</Button>
        </div>
        <div className={classes.right}>
            <img src={require("../../images/home-2-revolution-img-2.png")}/>
            <img className={classes.img2} src={require("../../images/home-2-revolution-img-1.png")}/>
        </div>
        <img className={classes.img} src={require('../../images/home-2-revolution-img-4.png')} />
    </div>
    </>
}
export default Slider1;