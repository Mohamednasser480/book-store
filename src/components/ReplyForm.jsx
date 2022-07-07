import React, {useContext, useState} from 'react';
import classes from './ReplyForm.module.css'
import Button from "./UI/Button";
import {CartContext} from "../Context/CreateContext";

const ReplyForm = () => {
    const [comment,setComment] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const [validName,setValidName] = useState(false);
    const [validEmail,setValidEmail] = useState(false);
    const [show,setShow] = useState(false);
    const {addComment} = useContext(CartContext);
    const nameHandler = (e) =>{
        setName(e.target.value);
        setValidName(/^[a-z A-Z]+$/.test(e.target.value));
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value);
        setValidEmail (/^[a-zA-z][a-zA-Z0-9_.]*@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(e.target.value));
    }
    const commentHandler = (e) => setComment(e.target.value);

    const submitHandler = ()=> {
        setShow(true);
        if (validName && validEmail && comment.length > 0) {
            addComment({commentedBy: name, body: comment})
            setName('');
            setEmail('');
            setComment('');
        }
    }
    return (
        <div className={`d-flex flex-column ${classes.formContainer}`}>
            {(!comment.length && show) ?
                <div className={classes.InvalidMessage}>Write your comment!!</div> : ""
            }
            <textarea className={`${classes.form__Message} mb-4`} placeholder={'Your Comment'} cols="30" rows="4" onChange={commentHandler}/>
            {(!validName && show) ?
                <div className={classes.InvalidMessage}>Enter Valid Name!!</div> : ""
            }
            <input placeholder={'Your Name'} type="text" name="" id="" className={`mb-4`} onChange={nameHandler}/>
            {(!validEmail && show) ?
                <div className={classes.InvalidMessage}>Enter Valid Email!! </div> : ""
            }
            <input placeholder={'Your Email'} type="text" name="" id="" className={`mb-4`} onChange={emailHandler}/>
            <Button className={`col-xl-2 col-md-4 ${classes.submitBtn}`} onClickhandler={submitHandler}>submit</Button>
        </div>
    );
};

export default ReplyForm;