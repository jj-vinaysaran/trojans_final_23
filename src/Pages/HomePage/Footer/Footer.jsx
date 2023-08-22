import React from "react";
import Logo from "../../../Images/Trojans/OnlyLogo_White.webp";
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import "../Footer/footer.css";
import image from "../../../Images/Trojans/Screenshot 2023-08-08 134643.png"
import citlogo from "../../../Images/Trojans/cit_white_logo.webp";

export default function Footer() {
    return (
        <>
           

            <div className="footer_container">
                    <div className="div_event">
                <div className="events">
                    <div className="childofevents">
                   
                        <h1 id="h1">Home</h1>
                        <a className="footer-a" href="/">About us</a>
                        <a className="footer-a" href="/">COLLEGE</a>
                        <a className="footer-a" href="/">HOME</a>
                       
                    </div>
                    <div className="childofevents">
                   
                        <h1 id="h1">Events</h1>
                        <a className="footer-a" href="/tech">Technical</a>
                        <a className="footer-a" href="/nontech">Fun Technical</a>
                        <a className="footer-a" href="/workshop">Workshop</a>
                        <a className="footer-a" href='https://forms.gle/73pTcgqmeRREtKuR8' target="_blank">Register</a>

                    </div>
                    <div className="childofevents">
                   
                        <h1 id="h1">Connect With Us</h1>
                        <a className="footer-a" href="/"> <FaInstagramSquare size={32} /> </a>
                        <a className="footer-a" href="/"> <FaLinkedin size={32} /></a>
                        <a className="footer-a" href="/"><FaTwitterSquare size={32} /> </a>
                       
                    </div>
                    <div className="childofevents">
                   
                        <h1 id="h1">Developers</h1>
                        <a className="footer-a" href="https://www.linkedin.com/in/vinay-saran-jj-b7861b22a/">Vinay Saran JJ</a>
                        <a className="footer-a" href="https://www.linkedin.com/in/sameerul-hak-877194249/">Sameerul hak S</a>
                        <a className="footer-a" href="https://www.linkedin.com/in/arunkumara03/">Arunkumar A</a>
                        <a className="footer-a" href="https://www.linkedin.com/in/pawan-kalyan-6a2903218">Pawan Kalyan B</a>



                       
                    </div>
                    </div>
                    <p className="footer_p">PS C:\CIT\INFORMATION TECHNOLOGY\TROJANS\@COPYRIGHTS</p>
                </div>
                <div className="clg_logo">
                <img src={citlogo} className="clg_img" alt="Trojans2023" /> 
                </div>
                <div className="terminal_img"><img src={image}  className="terminal_image"alt="Trojans2023" />
</div>
            </div>
        </> 
    )
}