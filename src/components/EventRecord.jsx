import React from 'react';
import classes from "./Event.module.css";
import Button from "./UI/Button";

const EventRecord = (props) => {
    return (
        <div className={`${classes.eventContainer}`}>
            <div className={`col-9 d-flex`}>
                <h2 className={` ${classes.event__header} ${classes.event__details} col-6 me-2`}>{props.date} / {props.location}</h2>
                <p>|</p>
                <h1 className={`${classes.event__title} mx-4`}> {props.title}</h1>
            </div>
            <Button className={`col-3 ${classes.event__button}`}>see tickets</Button>
        </div>
    );
};

export default EventRecord;