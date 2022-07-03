import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={`${classes.footerContainer}`}>
                <div className={`col-3 p-2`}>
                    <h3 className={`${classes.footer__header}`}>Publishers</h3>
                    <a>bestsellers</a><br/>
                    <a>interviews</a><br/>
                    <a>authors story</a><br/>
                    <a>book fairs</a><br/>
                    <a>help (FAQ)</a><br/>
                </div>
                <div className={`col-3 p-2`}>
                    <h3 className={`${classes.footer__header}`}>Contact</h3>
                    <p>Stay in touch with everything ChapterOne, follow us on social media and learn about new promotions.</p>
                    <div className={`${classes.icon}`}>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-solid fa-basketball"></i>
                    </div>
                </div>
                <div className={`col-3 p-2`}>
                    <h3 className={`${classes.footer__header}`}>News & Update</h3>
                    <p>We’d love it if you subscribed to our newsletter! You’ll love it too.</p>

                    <div className={`${classes.footer__emailContainer}`}>
                        <input className={`${classes.footer__input}`} type='text' placeholder='Email...'/>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
                <div className={`col-3 p-2`}>
                    <h3 className={`${classes.footer__header}`}>Social media</h3>
                    <div className={`${classes.footer_imgContainer}`}>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/64597150_2522195441202926_2456027307595973840_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=o7YjXOYIEZ4AX8qeHmj&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-3Uk509zOqD9q1tNXGYDsBl5wGCSN8x9gm4J7QofmcAw&oe=62C246CA'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/65734138_153434425801248_7844900373272158142_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vO7V-4MBSfQAX842kZ8&_nc_oc=AQnFkaVQFgOgmaUnB7xIAJa1Imd_y1OJZlQs2tiyYh4q69Y7W2be0NXkdp-7cE0pfzM&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_6PV_jHDzoGFssZmcN_Eo_RQLbJbjiQCFauN57gDdHkA&oe=62C11ADD'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/65999139_159289961866393_4987927538564284962_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=R_qTugNODk8AX_uLInC&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8ONTOD7ls0x9rraCOE-yrUKgBP3HDKQtbngxKkYuNDEw&oe=62C19D5B'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/65124294_398049147735483_8670305428516514358_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=F0anrTLXzIAAX_H7j-T&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT90o04z64ZMJooRRHLeaoOz_OGYQj2rexl2CfJ4Pv8IsQ&oe=62C2407E'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/66675239_2284760738443349_6629740624649938864_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Ao_tUculPy0AX_Fj2fD&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_-hwoN1L0UcMHWC4ssGf69MsoPYJy65j-_xTyWTYuw6Q&oe=62C2007A'}/>
                        <img src={'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/66675239_2284760738443349_6629740624649938864_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Ao_tUculPy0AX_Fj2fD&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_-hwoN1L0UcMHWC4ssGf69MsoPYJy65j-_xTyWTYuw6Q&oe=62C2007A'}/>

                    </div>
                </div>
            </div>
            <p className={classes.footer__text}>© 2019 qode interactive, all rights reserved</p>

        </div>
    );
};

export default Footer;