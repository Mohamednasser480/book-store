import React, {useState} from 'react';
import classes from './Comment.module.css'
import blogClasses from './Blog.module.css'
import ReplyForm from "./ReplyForm";
const Comment = (props) => {
    const [displayFrom,setDisplayForm] = useState(false);
    const handleShowFormComment = ()=> setDisplayForm(true);
    const  handleHideForm =()=> setDisplayForm(false);
    return (
        <div className={`${classes.comment}`}>
            <div className={`col-2`}>
                <img src={props.img}/>
            </div>
            <div className={`col-8`}>
                <span className={ `${classes.blog__qoute} pe-2`}>{props.commentedBy}</span>
                <span className={`${blogClasses.blog__info} fs-6`}>{props.date}</span>
                <p className={`${classes.blog_body} mt-3`}>{props.body}</p>
                {(displayFrom) ? <div className={`mb-4`}>
                                    <div>
                                        <span className={`${classes.replyto}`}>Reply to {props.commentedBy}</span>
                                        <a className={`${classes.actions}`} onClick={handleHideForm}>cancle</a>

                                        <ReplyForm></ReplyForm>
                                        </div>
                                    </div>
                                :  <a className={`${classes.replyBtn}`} onClick={handleShowFormComment}>reply</a>
                }

            </div>
        </div>
    );
};

export default Comment;