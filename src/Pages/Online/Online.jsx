import React from 'react'
import stop from "../../Images/Online/SHUTTER STOP (1).png";
import valo from "../../Images/Online/valo.png";
import pubg from "../../Images/Online/pubgedited.jpg";
import { useNavigate } from 'react-router-dom';
function Online() {
  const navigate=useNavigate();
    const Nontechdatas = [
      {eventname:"Valorant(Online)",
        imageSrc: valo,
        duration:"10",
        description:`GENERAL RULES:
        ●	Team Head(Captain) must register with a unique Team Name,5 members and no substitutes.
        ●	Team must be ready with Entry Fee Rs.150/ Team to participate on the day of Event.
        ●	Event is conducted in Online mode.
        ●	Interaction among the Players and Hacking would lead to immediate disqualification of the Team. 
        ●	MAP TOOL : BIND,HAVEN,SPLIT,ASCENT,ICEBOX,BREEZE.
        ●	Tournament Admin will make decision based upon Regional latency.
        `,
        coordinators:`VS Kanna `,
        timing:"1hrs",
        buttonText: "View More",
      },
      {eventname:"Shutter Stop(Online)",
        imageSrc: stop,
        duration:"10",
        description:`GENERAL RULES:
        •	EACH TEAM SHOULD CONSISTS A MAXIMUM OF 3 MEMBERS.
        •	THERE WILL BE 3 ROUNDS.
        •	ALL THE 3 ROUNDS WILL BE TIMER BASED.
        ROUND 1:
        •	IT WILL BE A MCQ ROUND.
        •	QUESTIONS WILL BE BASED ON PYTHON, C, C++, JAVA.
        •	THE TIME DURATION FOR EACH QUESTION WILL BE 20 SECONDS.
        ROUND 2:
        •	IT WILL BE A MEME BASED MCQ ROUND.
        •	QUESTIONS WILL BE BASED ON ALGORITHMS AND TECHNICAL TERMS.
        •	THE TIME DURATION FOR ANSWERING THE QUIZ AFTER THE MEME IS DISPLAYED WILL BE 10 SECONDS.
        ROUND 3:
        •	IT WILL BE SPOT THE ERROR ROUND.
        •	PARTICIPANTS NEED TO SPOT THE ERRORS IN THE GIVEN CODE AND NEED TO SAY THE NUMBER OF ERRORS.
        •	PAPER AND PEN WILL BE PROVIDED FOR DEBUGGING.
        •	EACH CODE WILL BE DISPLAYED FOR 40 SECONDS.
        `,
        coordinators:"VISHAL RK ,	ABHISHEK DAS ,	SUBITHA S ,	PRANAVI RETHIKA VS ,	SYED NADEEM G ",
        timing:"1hrs",
        buttonText: "View More"
      },
      {eventname:"BGMI (Offline)",
        imageSrc: pubg,
        duration:"10",
        description:`GENERAL RULES:
         ●	Team Head(Captain) must register with a unique Team Name,4 members and no substitutes.
        ●	Team must be ready with Entry Fee Rs.150/ Team to participate on the day of Event.
        ●	Event is conducted in Offline mode.
        ●	Interaction among the Players and Hacking would lead to immediate disqualification of the Team. 
        ●	Tournament Admin will make decision based upon Regional latency.
        `,
        coordinators:`V S Kanna `,
        timing:"1hrs",
        buttonText: "View More",
      }
    ];
    const sharedata=(event)=>{
      navigate('/eventdetail', { state: { eventname: event.eventname,
      duration:event.duration,
    description:event.description,
  coordinators:event.coordinators,
timing:event.timing,
eventtype:"/online"} });
    }
    return (
      <div>
         <div className='Event-Temp-Cont'>
        <div className='titleofeventtype'>
          <h1 className='mobile-view'>{"< Online Events />"}</h1>
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" div "}</span><span className='tags'>{">"}</span></h1>
        <div className='all-events'>
        {Nontechdatas.map((event, index) => (
            <div className='box-events' key={index}>
              <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" Img "}</span><span className='tags'>{">"}</span></h1>
            <img className="event-image" src={event.imageSrc} alt="Event" />
            <h2 className='closetag tags'>{"/>"}</h2>
            <h2 className='view-cont-more'  onClick={()=>sharedata(event)}><span className='tags'>{"< "}</span> <span className='tagname'>{"a "}</span><a className='view-more-button'>{event.buttonText}</a><span className='tags'>{" />"}</span> </h2>
          </div>
        ))}
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" /div "}</span><span className='tags'>{">"}</span></h1>
        </div>
      </div>
    )
  }

export default Online;
