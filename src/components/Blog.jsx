import react from "react"
import classes from './Blog.module.css'
import Comment from "./Comment";
import comments from '../comments'
import ReplyForm from "./ReplyForm";
function Blog () {
    return (
        <>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/121661029?h=316d62dc77" allowFullScreen></iframe>
            <div className={classes.blog}>
                <div className={`${classes.blog__info}`}>
                    <span>JOHN STRASS </span>
                    <span>/</span>
                    <span>JULY 29, 2019</span>
                </div>
                <h3 className={`${classes.blog__title}`}>Five favorites for the last five months</h3>
                <p className={`${classes.blog_body}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident… sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur.</p>
                <p className={`${classes.blog__qoute}`}>’’Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.’’</p>
                <p className={`${classes.blog__body} ${classes.blog_body}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident… sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Lorem ipsum dolor sit amet, consectetur.</p>
                <div className={`${classes.blog__iconSection}`}>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-pinterest"></i>
                </div>
                <div className={`${classes.blog__author} col-10`}>
                    <div className={`col-2`}>
                        <img src={require('../images/team-1-100x100.png')}/>
                    </div>
                    <div className={`col-10`}>
                        <p className={`${classes.blog__info} mt-1`}>AUSTRIA</p>
                        <p className={`${classes.blog__qoute} p-0 fs-4`}>John Strass</p>
                        <p className={`${classes.blog_body} `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
                        <div className={`border-0 col-3  ${classes.blog__iconSection} p-0 mt-4 mb-4`}>
                            <i className="fa-brands fa-facebook-f ps-0 ms-0 pe-2"></i>
                            <i className="fa-brands fa-twitter pe-2"></i>
                            <i className="fa-brands fa-linkedin-in pe-2"></i>
                            <i className="fa-brands fa-pinterest"></i>
                        </div>
                    </div>
                </div>
                <h1>Comments</h1>
                {
                 comments.map(comment => <Comment date={comment.date} commentedBy={comment.commentedBy}
                    body={comment.body} img={comment.img}/>)
                }
                <h1>Post a Comment</h1>
                <ReplyForm></ReplyForm>
            </div>
        </>
    )
}
export default Blog;