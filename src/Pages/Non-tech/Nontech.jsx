import React from 'react'
import "./nontech.css"
import shot from "../../Images/NonTech/One_Shot.jpeg";
import brain from "../../Images/NonTech/Brainaholic.jpeg";
import Craft from "../../Images/NonTech/Crafter_tactics.jpeg";
import impact from "../../Images/NonTech/ImpactX.jpeg";
import { useNavigate } from 'react-router-dom';
function Nontech() {
  const navigate=useNavigate();
  const Nontechdatas = [
    {eventname:"One-Shot",
      imageSrc: shot,
      duration:"10",
      description:`A dynamic campus tapestry unfolds: laughter in the quad, focused minds in libraries, and diverse unity over shared meals.
      Athletes' determination, artists' passion, and captivating performances reveal a vibrant Trojan journey.
      In one frame, emotions and time unite, chronicling a pulsating college narrative.
      Rules
      •	Individual participation only.
      •	The captured moments should be in reel format
      •	Shoot should be within the campus
      •	Participants should bring their own properties (DSLR , mobile , anything as per your convenience)
      •	 Reel must be within 1 min 
      •	The capture moments should be in appropriate manner.
      •	Plagiarism is strictly prohibited`,
      coordinators:"S Sameerul Hak, Vinay Saran JJ,Krishna G,Roshika,Pavi,Rithika",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Crafter Tactics",
      imageSrc: Craft,
      duration:"10",
      description:`Rules:
      •	1.Group or individual participation allowed
      •	2.Each group should consists of 2-3 members only 
      •	3.The individual member have 2-3 minutes time for their presentation(timings may be change)
      •	4.Groups have 5 minutes duration for their presentation(timings may be changes)
      •	5.The topic will be given on the spot.
      •	6.The participant should be present according to their topic 
      •	7.Teams will be evaluated based on creativity, feasibility, clarity of presentation, 
      •	and their way of marketing with the given topic.
      •	8.The decision of the judging panel will be final and binding.
      •	9.Prizes will be awarded to the teams with the most outstanding marketing strategies and presentations.
      •	10.All participating teams will receive a certificate of participation.
      .`,
      coordinators:"S Sameerul Hak ,Suriya , Sharvesh",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Brainaholic",
      imageSrc: brain,
      duration:"10",
      description:`
      Dive into the world of brain teasers and trickers by participating in Brainaholic! Test your knowledge and revel in the joy of face-to-face competition. Join us for a quiz extravanganza.
      
      RULES:
      •	The game consists of three rounds.
      •	Each team can have maximum of three members.
      •	Each round has a time limit of 20mins.
      •	Mobile phone usage is strictly prohibited.
      •	No additional opportunities will be provided .
      •	Participants are requested to respond within the designated time limit .
      
      `,
      coordinators:"B. Kishore,Evelyn Beatrice A,Hariharan",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"ImpactX",
      imageSrc: impact,
      duration:"10",
      description:`Description:
      Bring life to your ideas through this ecstatic event ImpactX - Unfold brilliance and elevate your ideas through a paper presentation event.
      Rules:
      •	The participants have to submit their abstract in the form of PPT through Google Form
      •	Maximum team members allowed will be 3
      •	Presentations must be completed within 5 minutes.
      •	Be Clear and Concise
      •	3 mins of time will be allotted to answer the questions posed by the judges
      •	Keep your content professional and relevant to the topic.
      •	Uniqueness of ideas, innovative approaches, or fresh perspectives in addressing the subject matter
      `,
      coordinators:"Vinay Saran JJ,Amrize,Padmavarshini B",
      timing:"1hrs",
      buttonText: "View More",
    },
  
   
   
  ];
  const sharedata=(event)=>{
    console.log(event)
    navigate('/eventdetail', { state: { eventname: event.eventname,
    duration:event.duration,
  description:event.description,
coordinators:event.coordinators,
timing:event.timing,
eventtype:"/nontech" } });
  }
    return (
      <div>
         <div className='Event-Temp-Cont'>
        <div className='titleofeventtype'>
          <h1 id='mobile-view'>{"< Non Technical Events />"}</h1>
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" div "}</span><span className='tags'>{">"}</span></h1>
        <div className='all-events'>
        {Nontechdatas.map((event, index) => (
          
            <div className='box-events' key={index}>
              <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" Img "}</span><span className='tags'>{">"}</span></h1>
            <img className="event-image" src={event.imageSrc} alt="Event" />
            <h2 className='closetag tags'>{"/>"}</h2>
            <h2 className='view-cont-more' onClick={()=>sharedata(event)}><span className='tags'>{"< "}</span> <span className='tagname'>{"a "}</span><a className='view-more-button'>{event.buttonText}</a><span className='tags'>{" />"}</span> </h2>
          </div>
        ))}
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" /div "}</span><span className='tags'>{">"}</span></h1>
        </div>
      </div>
    )
  }

export default Nontech
