import React from "react";
import './Pages.css';
import WorkersCards from "../WorkersCards";
import CooperationsCards from "../CooperationsCards";

export default function AboutUs() {
    return (
        <div className="aboutUs-wrap">
            <h1>About Us</h1>
            <div className="info-wrap">
                <p>We are a small company that develops, creates and supports applications in the field of artificial intelligence.
                    <br /><br />Our company was created in april 2020 by two main developers - Alejandro and Evgeniy. At that time they wanted to create something new and decided to choose the path of AI. And even though at that time they did not have much knowledge in this area, their business experience gained earlier helped them create the company of their dreams.
                    <br /><br />At the moment, we have reached considerable heights, gained a large number of connections, created about 2 dozen systems for solving various problems related to AI.</p>
                <div className="workers-wrap">
                    <h1 className="workers">Our Workers</h1>
                    <WorkersCards />
                </div>
                <div className="cooperations-wrap">
                    <h1 className="cooperations">We Cooperate with</h1>
                    <CooperationsCards />
                </div>
            </div>
        </div>
    )
}