import React, {useEffect} from 'react';
import classes from "./Contact.module.css";
import Map from './Map'
const Contact = () => {
    //AIzaSyCK0yIeWap_IHPhjuDc9n3lm9qyUjcTG_Y


    return (
        <>
            <div className={classes.mapContainer}>
                <Map/>
            </div>
        <div className={`container d-flex justify-content-between ${classes.contact}`}>
            <div className={`col-3 p-3 `}>
                <h2 className={`${classes.contact__header}`}>Bookstore Central</h2>
                <p><i className="fa-solid fa-location-dot"></i> 194 Amsterdam Ave NY</p>
                <p><i class="fa-solid fa-mobile-screen"></i>(+123) 456 789</p>
                <p><i class="fa-solid fa-envelope"></i>chapter@example.com</p>
            </div>
            <div className={`col-3 p-3`}>
            <h2 className={`${classes.contact__header}`}>Bookstore 1</h2>
                <p><i className="fa-solid fa-location-dot"></i> 194 Amsterdam Ave NY</p>
                <p><i class="fa-solid fa-mobile-screen"></i>(+123) 456 789</p>
                <p><i class="fa-solid fa-envelope"></i>chapter@example.com</p>
            </div>
            <div className={`col-3 p-3`}>
                <h2 className={`${classes.contact__header}`}>Bookstore 2</h2>
                <p><i className="fa-solid fa-location-dot"></i> 194 Amsterdam Ave NY</p>
                <p><i class="fa-solid fa-mobile-screen"></i>(+123) 456 789</p>
                <p><i class="fa-solid fa-envelope"></i>chapter@example.com</p>
            </div>
            <div className={`col-3 p-3`}>
                <h2 className={`${classes.contact__header}`}>Publisher</h2>
                <p><i className="fa-solid fa-location-dot"></i> 194 Amsterdam Ave NY</p>
                <p><i class="fa-solid fa-mobile-screen"></i>(+123) 456 789</p>
                <p><i class="fa-solid fa-envelope"></i>chapter@example.com</p>
            </div>
        </div>
            <div className={`container d-flex justify-content-between mt-5 ${classes.contact__imgContainer}`}>
                <img src={'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-2.png'}/>
                <img src={'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-3.png'}/>
                <img src={'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-4.png'}/>
                <img src={'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-5.png'}/>
                <img src={'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-6.png'}/>

            </div>
        </>
    );
};

export default Contact;

