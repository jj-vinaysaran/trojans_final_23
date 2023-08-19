import React from "react";
import "../Sponsors/sponsors.css";
import cards from "../../Images/sponsors/cardsample.jpeg";
import {BsLink45Deg} from "react-icons/bs";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
        const Cards = () => {
            return(
                <>
                <section className="card">
                    <div className="card-container">
                    <div className="card-box">
                        <img src={cards} alt="" />
                        <div className="card-layer">
                        <h4 className="sponsh4">Sponsor name</h4>
                            <p className="sponsp">Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        </div>
                    </div>
                       <div className="card-box">
                        <img src={cards} alt="" />
                        <div className="card-layer">
                        <h4 className="sponsh4">Sponsor name</h4>
                            <p className="sponsp">Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        </div>
                    </div>
                       <div className="card-box">
                        <img src={cards} alt="" />
                        <div className="card-layer">
                        <h4 className="sponsh4">Sponsor name</h4>
                            <p className="sponsp">Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        </div>
                    </div>
                </div>
            </section>
            </>

        );
        }   

        export default function Sponsors(){
            return(
                <>
                <div className = "main_sponsors">
                <h1 className="oursp"> {"<OUR SPONSORS />"} </h1>
                    <div className = "cards"> 
                    <Cards/>
                    </div>
                </div>
                </>
            )
        }