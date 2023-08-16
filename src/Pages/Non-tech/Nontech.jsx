import React from 'react'
import "./nontech.css"
import p5 from "../../Images/Tech/codegizza.jpeg"
import { useNavigate } from 'react-router-dom';
function Nontech() {
  const navigate=useNavigate();
  const Nontechdatas = [
    {eventname:"event1",
      imageSrc: p5,
      duration:"10",
      description:`A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators:"me and u",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"event1",
      imageSrc: p5,
      duration:"10",
      description:`A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators:"me and u",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Brainaholic",
      imageSrc: p5,
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
      imageSrc: p5,
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
