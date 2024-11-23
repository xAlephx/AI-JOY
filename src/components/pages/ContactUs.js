import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHouse, faIndustry, faPhone } from "@fortawesome/free-solid-svg-icons";
import './Pages.css'


export default function ContactUs() {
    return (
        <div className="contactUs-wrap">
            <h1>Contact Us</h1>
            <div className="info-wrap">
                <h2 className="contacts">Mail:</h2>
                <div className="contact">
                    <FontAwesomeIcon icon={faEnvelope} className='logo-Icon' />
                    AI-JOY@gmail.com
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faEnvelope} className='logo-Icon' />
                    AI-JOY-Business@gmail.com
                </div>
                <h2 className="contacts">Phone:</h2>
                <div className="contact">
                    <FontAwesomeIcon icon={faPhone} className='logo-Icon' />
                    +(000)-000-00-00
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faPhone} className='logo-Icon' />
                    +(111)-111-11-11
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faPhone} className='logo-Icon' />
                    +(222)-222-22-22
                </div>
                <h2 className="contacts">Addresses:</h2>
                <div className="contact">
                    <FontAwesomeIcon icon={faHouse} className='logo-Icon' />
                    Kosar street 00 a
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faIndustry} className='logo-Icon' />
                    Beglin street 11 b
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faIndustry} className='logo-Icon' />
                    Disco avenue 22 c
                </div>
                <h2 className="contacts">Socials:</h2>
                <NavLink to='/contactus' className="contact link facebook">
                    <FontAwesomeIcon icon={faFacebook} className='social-icon' size="lg" />
                    Facebook
                </NavLink>
                <NavLink to='/contactus' className="contact link linkedin">
                    <FontAwesomeIcon icon={faLinkedin} className='social-icon' size="lg" />
                    LinkedIn
                </NavLink>
                <NavLink to='/contactus' className="contact link instagram">
                    <FontAwesomeIcon icon={faInstagram} className='social-icon' size="lg" />
                    Instagram
                </NavLink>
                <NavLink to='/contactus' className="contact link youtube">
                    <FontAwesomeIcon icon={faYoutube} className='social-icon' size="lg" />
                    YouTube
                </NavLink>
            </div>
        </div >
    )
}