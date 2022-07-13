import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={`${classes.footerContainer}`}>
                <div className={` container `}>
            <div className={`row`}>
                <div className={`col-lg-3 col-md-6 col-sm-12 px-md-2 px-sm-3 py-3`}>
                    <h3 className={`${classes.footer__header}`}>Publishers</h3>
                    <a>bestsellers</a><br/>
                    <a>interviews</a><br/>
                    <a>authors story</a><br/>
                    <a>book fairs</a><br/>
                    <a>help (FAQ)</a><br/>
                </div>
                <div className={`col-lg-3 col-md-6 col-sm-12 px-md-2 px-sm-3  py-3`}>
                    <h3 className={`${classes.footer__header}`}>Contact</h3>
                    <p>Stay in touch with everything ChapterOne, follow us on social media and learn about new promotions.</p>
                    <div className={`${classes.icon}`}>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-solid fa-basketball"></i>
                    </div>
                </div>
                <div className={`col-lg-3 col-md-6 col-sm-12 px-md-2 px-sm-3 py-3`}>
                    <h3 className={`${classes.footer__header}`}>News & Update</h3>
                    <p>We’d love it if you subscribed to our newsletter! You’ll love it too.</p>

                    <div className={`${classes.footer__emailContainer}`}>
                        <input className={`${classes.footer__input}`} type='text' placeholder='Email...'/>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
                <div className={`col-lg-3 col-md-6 col-sm-12 px-md-2 px-sm-3 py-3`}>
                    <h3 className={`${classes.footer__header}`}>Social media</h3>
                    <div className={`${classes.footer_imgContainer}`}>
                        <img src={require('../images/64597150_2522195441202926_2456027307595973840_n.jpg')}/>
                        <img src={require('../images/65734138_153434425801248_7844900373272158142_n.jpg')}/>
                        <img src={require('../images/65124294_398049147735483_8670305428516514358_n.jpg')}/>
                        <img src={require('../images/66675239_2284760738443349_6629740624649938864_n.jpg')}/>
                        <img src={require('../images/65999139_159289961866393_4987927538564284962_n.jpg')}/>
                        <img src={require('../images/home-2-gallery-10.jpg')}/>
                    </div>
                </div>
            </div>
                </div>
            </div>
            <p className={classes.footer__text}>© 2019 qode interactive, all rights reserved</p>

        </div>
    );
};

export default Footer;