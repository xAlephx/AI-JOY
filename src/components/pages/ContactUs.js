import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            </div>
        </div>
    )
}