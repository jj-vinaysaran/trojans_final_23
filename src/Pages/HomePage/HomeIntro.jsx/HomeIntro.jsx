import React from 'react'
import "./homeintro.css"
import Trojansimg from "../../../Images/Trojans/trojans-compressed.webp"
import scrol from "../../../Images/scroll.png";
import {Link} from 'react-router-dom'
function HomeIntro() {
  return (
    <div className="herohomecontainer">
      <p className="heroPTag"><span className='home_tags'>{"< "}</span>DEPARTMENT OF<span className='home_tags'>{" />"}</span></p>
      <h3 id="dept-intro"><span className='home_tags'>{"< "}</span>INFORMATION TECHNOLOGY<span className='home_tags'>{" />"}</span></h3>
      <p className="heroPTag"> <span className='home_tags'>{"< "}</span>PRESENTS<span className='home_tags'>{" />"}</span></p>
      <img src={Trojansimg} id="logo_trojans"  alt=""/>
      <h3 id="home-intro"><span className='tags_intro'>{"<"}</span> A NATIONAL LEVEL TECHNICAL SYMPOSIUM <span className='tags_intro'>{" />"}</span></h3>

      <Link to="/registration" className="register-button-home">
        Register
      </Link>

      <div className="scroll">
        <h2 className="scroll_intro">SCROLL DOWN</h2>
        <img src={scrol} alt="" className="scroll_img"></img>
      </div>
    </div>
  );
}

export default HomeIntro
