import classes from './Slider.module.css'
import Button from '../UI/Button'
function Slider3(){
    return(
        <div className={` container px-4  ${classes.sliderContainer} ${classes.slider3}`}>
            <div className={` d-sm-none d-lg-block  col-4 ${classes.left}`}>
                <img src={require("../../images/home-2-slide-3-image-1b.jpg")}/>
            </div>
            <div className={`col-sm-12 col-lg-8 text-sm-center text-lg-start ${classes.right} d-block`}>
                <h2 className={classes.slider__header}>it's chapterone</h2>
                <h1 className={classes.slider__subheader}>the all-time classics</h1>
                <p className={`${classes.slider__p} mx-sm-auto mx-lg-0 text-sm-center text-lg-start`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cum cupiditate deleniti iusto laboriosam nisi quam repellat saepe temporibus.</p>
                <Button className={`mt-3`}>read more</Button>
            </div>
        </div>
    )}
export default Slider3;