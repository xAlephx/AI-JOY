import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';


export default function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    If You wanna be in touch with our propositions,
                    make sure to link your Email right here :)
                </p>
                <div className="input-areas">
                    <form className="footer-email-form">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <button className='btn' type='button'>Subscribe</button>
                    </form>
                </div>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrap">
                    <div className="footer-link-items">
                        <NavLink to='/' className="footer-logo" >
                            <FontAwesomeIcon icon={faCircleNodes} size='3x' className='' />AI-JOY
                        </NavLink>
                    </div>
                    <div className="footer-link-items">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/products'>Products</NavLink>
                        <NavLink to='/careers'>Careers</NavLink>
                        <NavLink to='/aboutUs'>About Us</NavLink>
                    </div>
                    <div className="footer-link-items">
                        <NavLink to='/contactUs'>Contact Us</NavLink>
                        <NavLink to='/privacy'>Privacy</NavLink>
                        <NavLink to='/termsOfUse'>Terms Of Use</NavLink>
                    </div>
                    <div className="footer-link-items">
                        <h2>Our Socials</h2>
                        <div className="footer-socials">
                            <NavLink to='/'>
                                <FontAwesomeIcon icon={faFacebook} className='social-icon-link facebook' />
                            </NavLink>
                            <NavLink to='/'>
                                <FontAwesomeIcon icon={faLinkedin} className='social-icon-link linkedin' />
                            </NavLink>
                            <NavLink to='/'>
                                <FontAwesomeIcon icon={faInstagram} className='social-icon-link instagram' />
                            </NavLink>
                            <NavLink to='/'>
                                <FontAwesomeIcon icon={faYoutube} className='social-icon-link youtube' />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}