import classes from './Details.module.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Title from './UI/Title'
import data from '../data'
function Details(){
    let {id} = useParams();
    let [book,setBook] = useState( data.filter (dt=>dt.id == id));
    return (
        <>
            <Title title="product" subtitle="shop list"></Title>
            <div className={`${classes.Details__container}`}>
                <div className={`${classes.Details__left} col-5`}>
                    <img src={require(`../images${book[0].img}`)} alt=""/>

                </div>
                <div className={`${classes.Details__right} col-7`}>
                    <p className={`${classes.Details__author}`}>by {book[0].author}</p>
                    <p className={`${classes.Details__title}`}>{book[0].title}</p>
                    <p className={`${classes.Details__price}`}>${book[0].price}</p>
                    <p className={`${classes.Details__description}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem culpa dolorem doloremque earum est exercitationem itaque libero maxime minima modi mollitia nemo nulla officia omnis quas qui quibusdam sapiente sed sit tempore, ut vitae. At, cum debitis eius eos facere in iure labore nam natus nulla officiis provident? Neque.</p>
                </div>
            </div>
        </>

    )
}
export default Details;