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
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/64597150_2522195441202926_2456027307595973840_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=o2KkdIVh-zQAX_png0C&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8fkJPLhr6Hi3V57TU3x9dqt0crVpRwibr1IL0vOuY-qw&oe=62CC2A0A'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/65734138_153434425801248_7844900373272158142_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_OZXuZ22lQ8AX99-9Ns&_nc_oc=AQkQ8wZKdE6vQCmeyeMTVxDyJ7H7s_PBSpVGvD_4Ip_pSWfhrZMyvtYHTp66-zSuUUs&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-MZAphk4qwi7pChXXnemfA1FOTGwuMu8oX79NOAXzrUQ&oe=62CAFE1D'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/65999139_159289961866393_4987927538564284962_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-aqVNiuIdLUAX_o-ek1&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT994RMmzMF1HsmBllWjM86A1FFYkmiGe8y9wN18oJEuEQ&oe=62CB809B'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/65124294_398049147735483_8670305428516514358_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=BHxTIFOD5nYAX_oPk0J&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_fCgyPTCFIG5nX-HJ58Q8BAImQJr_mQXXbMD-q8WkABQ&oe=62CC23BE'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/66675239_2284760738443349_6629740624649938864_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=GsxbIkynNjEAX8rXwni&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-mICtET8VM1hGZGljNcQPuQjp8QqY_JrJX4ou1EmkIwg&oe=62CBE3BA'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/62241246_129621398264101_3103299431831323622_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=OFPP8LlAFKcAX9P86b4&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8DmzAwfdImq7RR6XUj7wvrIiwyYKpdUnQyLkQHV1FCew&oe=62CA898C'}/>
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