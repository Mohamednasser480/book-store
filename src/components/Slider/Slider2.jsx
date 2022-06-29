import classes from './Slider.module.css'
import Button from '../UI/Button'
function Slider2(){
    return<>
        <div className={` container px-4  ${classes.sliderContainer} ${classes.slider2} `}>
            <h2 className={classes.slider__header}>it's chapterone</h2>
            <h1 className={classes.slider__subheader}>the world of words</h1>
            <p className={classes.slider__p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cum cupiditate deleniti iusto laboriosam nisi quam repellat saepe temporibus.</p>
            <Button className={`mt-3`}>read more</Button>
        </div></>
}
export default Slider2;
