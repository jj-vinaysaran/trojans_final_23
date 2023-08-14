import React from "react";
import "../Sponsors/sponsors.css";
import cards from "../../Images/sponsors/cardsample.jpeg";
import {BsLink45Deg} from "react-icons/bs";
import Sameer from "../../Images/sponsors/Sameer.jpeg";
import Pawan from "../../Images/sponsors/Pawan.jpeg";

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
            <div class="Dev_bg">
                    <div class="Dev_main">
                        <h3 class="Dev_heading"><span>Our</span>Developers</h3>
                        <div class="Dev_container">
                            <div class="Dev_card">
                                <img src=""/>
                                <div class="Dev_details">
                                    <h3>Arunkumar A</h3>
                                    <p>Web Developer</p>
                                    <div class="Dev_social-links">
                                        <a href="#"><i class="uil uil-facebook-f"></i></a>
                                        <a href=""><i class="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="Dev_card">
                                <img src={Pawan}/>
                                <div class="Dev_details">
                                    <h3>B Pavan Kalyan</h3>
                                    <p>Web Developer</p>
                                    <div class="Dev_social-links">
                                        <a href="#"><i class="uil uil-facebook-f"></i></a>
                                        <a href=""><i class="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="Dev_card">
                                <img src = {Sameer}/>
                                <div class="Dev_details">
                                    <h3>S Sameerul Hak</h3>
                                    <p>Web Developer</p>
                                    <div class="Dev_social-links">
                                        <a href=""><i class="uil uil-instagram"></i></a>
                                        <a href=""><i class="fab fa-linkedIn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="Dev_card">
                                <img src=""/>
                                <div class="Dev_details">
                                    <h3>Vinay Saran JJ</h3>
                                    <p>Web Developer</p>
                                    <div class="Dev_social-links">
                                        <a href="#"><i class="uil uil-facebook-f"></i></a>
                                        <a href=""><i class="uil uil-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
        }   

        export default function Sponsors(){
            return(
                <>
                <div className = "main_sponsors">
                <h1 className="oursp"> Sponsors</h1>
                    <div className = "cards"> 
                    <Cards/>
                    </div>
                </div>
                </>
            )
        }