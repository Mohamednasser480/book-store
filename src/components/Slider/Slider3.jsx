import classes from './Slider.module.css'
import Button from '../UI/Button'
function Slider3(){
    return(
        <div className={` container px-4  ${classes.sliderContainer} ${classes.slider3}`}>
            <div className={`col-4`}>
                <img src={require("../../images/home-2-slide-3-image-1b.jpg")}/>
            </div>
            <div className={`col-8`}>
                <h2 className={classes.slider__header}>it's chapterone</h2>
                <h1 className={classes.slider__subheader}>the all-time classics</h1>
                <p className={classes.slider__p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cum cupiditate deleniti iusto laboriosam nisi quam repellat saepe temporibus.</p>
                <Button className={`mt-3`}>read more</Button>
            </div>
        </div>
    )}
export default Slider3;