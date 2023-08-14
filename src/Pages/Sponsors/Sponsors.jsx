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
                            <img src={cards} alt=""/>
                            <div className="card-layer">
                                <h4>Sponsor name</h4>
                                <p>Sponsor details</p>
                                    <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                            </div>
                    </div>
                    <div className="card-box">
                        <img src={cards} alt="" />
                        <div className="card-layer">
                        <h4>Sponsor name</h4>
                            <p>Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        </div>
                    </div>
                    <div className="card-box">
                        <img src={cards} alt="" />

                        <div className="card-layer">
                        <h4>Sponsor name</h4>
                            <p>Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        
                        </div>
                    </div>
                    <div className="card-box">
                        <img src={cards} alt="" />
                        <div className="card-layer">
                        <h4>Sponsor name</h4>
                            <p>Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i" /></a>
                            
                        </div>
                    </div>
                    <div className="card-box">
                        <img src={cards} alt="" />
                        <div className="card-layer">
                        <h4>Sponsor name</h4>
                            <p>Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                            
                        </div>
                    </div>
                    <div className="card-box">
                        <img src={cards}  alt=""/>

                        <div className="card-layer">
                        <h4>Sponsor name</h4>
                            <p>Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        </div>
                    </div>
                    <div className="card-box">
                        <img src={cards}  alt=""/>

                        <div className="card-layer">
                        <h4>Sponsor name</h4>
                            <p>Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        
                        </div>
                    </div>
                    <div className="card-box">
                        <img src={cards}  alt=""/>

                        <div className="card-layer">
                        <h4>Sponsor name</h4>
                            <p>Sponsor details</p>
                            <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><BsLink45Deg className="i"/></a>
                        </div>
                    </div>
                </div>
            </section>
             <div className="developers">
                <h1 className="dev_title">Developers</h1> 
                <div className="dev_card_parent">
                    <div className="dev_card"><h1 className="dev_name">Arunkumar</h1><h3 className="dev_role">Full Stack developer</h3><div className="dev_icons"><a  href=""><FaInstagram/></a> <a href="#"><FaLinkedinIn/></a> <a href="#"><FaGithub/></a></div></div>
                    <div className="dev_card"><h1 className="dev_name">B Pawan Kalyan</h1><h3 className="dev_role">Full Stack developer</h3><div className="dev_icons"><a  href=""><FaInstagram/></a> <a href="#"><FaLinkedinIn/></a> <a href="#"><FaGithub/></a></div></div>
                    <div className="dev_card"><h1 className="dev_name">Vinay Saran JJ</h1><h3 className="dev_role">Full Stack developer</h3><div className="dev_icons"><a  href=""><FaInstagram/></a> <a href="#"><FaLinkedinIn/></a> <a href="#"><FaGithub/></a></div></div>
                    <div className="dev_card"><h1 className="dev_name">S Sameerul Hak</h1><h3 className="dev_role">Full Stack developer</h3><div className="dev_icons"><a  href=""><FaInstagram/></a> <a href="#"><FaLinkedinIn/></a> <a href="#"><FaGithub/></a></div></div>
                </div>
             </div>
            </>

        );
        }   

        export default function Sponsors(){
            return(
                <>
                <div className = "main_sponsors">
                <h1 className="oursp"> OUR SPONSORS</h1>
                    <div className = "cards"> 
                    <Cards/>
                    </div>
                </div>
                </>
            )
        }