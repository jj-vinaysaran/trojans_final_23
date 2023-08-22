import React from "react";
import Logo from "../../../Images/Trojans/OnlyLogo_White.webp";
import {FaInstagram , FaLinkedinIn , FaYoutube} from "react-icons/fa"
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
                        <a className="footer-a" href="/nontech">Non Technical</a>
                        <a className="footer-a" href="/workshop">Workshop</a>
                        <a className="footer-a" href='https://forms.gle/73pTcgqmeRREtKuR8' target="_blank">Register</a>

                    </div>
                    <div className="childofevents">
                   
                        <h1 id="h1">Connect With Us</h1>
                        <a className="footer-a" href="/">Instagram</a>
                        <a className="footer-a" href="/">Linked In</a>
                        <a className="footer-a" href="/">Twitter</a>
                       
                    </div>
                    <div className="childofevents">
                   
                        <h1 id="h1">Developers</h1>
                        <a className="footer-a" href="/">Vinay Saran</a>
                        <a className="footer-a" href="/">Sameerul hak</a>
                        <a className="footer-a" href="/">Pawan kalyan B</a>
                        <a className="footer-a" href="/">ArunKumar</a>



                       
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