import react from "react"
import Title from "./UI/Title";
import classes from "./Event.module.css"
import Button from "./UI/Button";
import EventRecord from "./EventRecord";
import events from '../events'
function Event () {
    return (
        <div>
            <Title classes={classes.title} title={'info'} subtitle={'event dates'}/>
            <div className={`${classes.event__main} col-lg-5 col-md-8`}>
                <h2 className={`${classes.event__header}`}>events</h2>
                <h1 className={`${classes.event__subheader}`}>Book promotions</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={`${classes.eventsContainer} col-sm-10 col-lg-7 mx-auto`}>
                {
                    events.map(event => <EventRecord date={event.date} title={event.title} location={event.location} />)
                }
            </div>
        </div>
    )
}
export default Event;