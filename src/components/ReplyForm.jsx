import React from 'react';
import classes from './ReplyForm.module.css'
import Button from "./UI/Button";
const ReplyForm = () => {
    return (
        <div className={`d-flex flex-column ${classes.formContainer}`}>
            <textarea className={`${classes.form__Message} mb-4`} placeholder={'Your Comment'} cols="30" rows="4"/>
            <input placeholder={'Your Name'} type="text" name="" id="" className={`mb-4`}/>
            <input placeholder={'Your Email'} type="text" name="" id="" className={`mb-4`}/>
            <Button className={`col-2`}>submit</Button>
        </div>
    );
};

export default ReplyForm;