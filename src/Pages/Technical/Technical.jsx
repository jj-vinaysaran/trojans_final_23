import React from 'react'
import "./technical.css"
import  Beyond from "../../Images/Tech/BeyondTheVisual.jpg"
import  CodeBeat from "../../Images/Tech/CodeBeats1.jpg"
import  Code from "../../Images/Tech/CodersChemistry.jpg"
import  Quiz from "../../Images/Tech/QuizTopher.jpg"
import { useNavigate } from 'react-router-dom';
function Technical() {
  const navigate=useNavigate();
    const Nontechdatas = [
      {eventname:"Coders Chemistry",
        imageSrc: Code,
        duration:"10",
        description:`GENERAL RULES:
        ●	EACH TEAM SHOULD CONSIST OF 2 MEMBERS.
        ●	THERE WILL BE 3 ROUNDS.
        ●	TEAM MEMBERS ARE NOT ALLOWED TO COMMUNICATE WITH EACH OTHER IN THE 1ST AND 2ND ROUNDS.
        ●	THE PROGRAMMING LANGUAGES: JAVA, C, C++, PYTHON
        ROUND 1:
        ●	ONE MEMBER SHOULD CODE THE ANSWERS FOR THE QUESTIONS, WHILE THE OTHER SHOULD IMPLEMENT THE LOGIC USING THE PAPER-AND-PEN METHOD.
        ●	THE MEMBERS WILL SWAP ROLES EVERY 3 MINUTES AND PROCEED WITH THE REMAINING PART OF THE CODE.
        ●	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
        ROUND 2:
        ●	BOTH TEAM MEMBERS HAVE TO CODE SIMULTANEOUSLY ON DIFFERENT PROBLEMS.
        ●	THE POSITIONS OF THE TEAMMATES ARE SWAPPED EVERY 4 MINUTES.
        ●	THE AVERAGE SCORE OF THE TEAM IS CONSIDERED FOR ELIMINATION.
        ●	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
        ROUND 3:
        ●	THE TEAM WILL BE GIVEN A SET OF PROBLEMS TO SOLVE.
        ●	BOTH TEAM MEMBERS CAN DISCUSS AND SOLVE THE PROBLEMS.
        ●	PROBLEMS WILL BE BASED ON DATA STRUCTURES & ALGORITHMS.
        ●	THE TIME DURATION FOR THIS ROUND IS 20 MINUTES.
        `,
        coordinators:`
        •	HARI PRASAD R - 7550160349,
        •	SARUMATHI - 
        •	SHANMUGA PRIYA -  
        •	SOWMIYA -`,
        timing:"1hrs",
        buttonText: "View More",
      },
      {eventname:"Quiztopher",
        imageSrc: Quiz,
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
        coordinators:`
        •	VISHAL RK – 9956189750  
        •	ABHISHEK DAS - 
        •	SUBITHA S - 
        •	PRANAVI RETHIKA VS - 
        •	SYED NADEEM G - 
`,
        timing:"1hrs",
        buttonText: "View More",
      },
      {eventname:"Code Beats",
        imageSrc: CodeBeat,
        duration:"10",
        description:`GENERAL RULES:
        •	EACH TEAM SHOULD CONSIST OF 2 MEMBERS.
        •	THERE WILL BE 3 ROUNDS.
        •	TEAM MEMBERS ARE NOT ALLOWED TO COMMUNICATE WITH EACH OTHER IN THE 1ST ROUND.
        •	THE PROGRAMMING LANGUAGES: JAVA, C, C++, PYTHON
        •	NO MALPRACTICE
        •	ROUGH PAPER WILL BE PROVIDED FOR ATTENDIES TO USE
        ROUND 1:
        •	ONE MEMBER SHOULD CODE THE ANSWERS FOR THE QUESTIONS, WHILE THE OTHER CAN PARTICIPATE IN THE GUESSING GAME
        •	ONE MEMBER LISTENS TO MUSIC AND HAVE TO FIND THE CORRESPONDING MOVIE(HEADPHONES WOULD BE PROVIDED)
        •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
        ROUND 2:
        •	ROUND 2 IS COMMON TO ALL TEAMS
        •	BOTH MEMBERS CAN PARTICIPATE.
        •	HAVE TO GUESS THE REVERSED SONG, IF FOUND, THEN THEY CAN PROCEED TO CODE.BOTH CAN DISCUSS AND SOLVE THE PROBLEM.
        •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
        ROUND 3:
        •	GUESS THE SONG FROM THE BEAT, THE EARLIER YOU FIND THE EASIER YOU CAN WIN.
        •	PLAYERS WILL BE PROVIDED WITH QUESTIONS BASED ON A TIME CONSTRAINT, IF YOU GUESS IT EARLY, YOU GET AN EASY CHALLENGE TO SOLVE.
        •	FOR EXAMPLE:
        •	IF FOUND WITHIN 2 MINUTES- EASY,
        •	IF FOUND WITHIN 3 MINUTES-MEDIUM
        •	IF FOUND WITHIN 5 MINUTES (MINIMUM)-HARD.
        •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
        `,
        coordinators:"	B PAWAN KALYAN ,E DHARSHINI ,KAVIYASRI V ,KAVI T ,R S RAGHAVEE ",
        timing:"1hrs",
        buttonText: "View More",
      },
      {eventname:"Beyond Your Visuals",
        imageSrc: Beyond,
        duration:"10",
        description:`GENERAL RULES:
        •	EACH TEAM SHOULD CONSIST OF 1 MEMBERS.
        •	THERE WILL BE 3 ROUNDS.
        •	THE PROGRAMMING LANGUAGES: JAVA, C/C++, PYTHON
        •	NO MALPRACTICE
        •	ROUGH PAPER WILL BE PROVIDED FOR ATTENDIES TO USE
        ROUND 1:
        •	QUESTIONS WILL BE VIEWED FOR ONE MINUTE , MONITOR WILL BE TURNED OFF AFTER THAT  
        •	FOR EACH DURATION OF TWO MINUTES , THE CODER CAN VIEW THE MONITOR ONCE FOR 10 SECONDS
        •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
        ROUND 2:
        •	YOUR PAIR WILL BE SELECTED BASED ON PAPER BOWL METHOD
        •	BOTH MEMBERS CAN PARTICIPATE.
        •	THE PERSON WHO COMPLETES THE CODE FIRST WINS.
        •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
        ROUND 3:
        •	CONSTRAINTS WILL BE GIVEN BASED ON THE PROBLEM 
        •	NO FOR LOOP SHOULD BE USED
        •	NO BUILT IN FUNCTION SHOULD BE USED 
        •	THE CODE SHOULD BE COMPLETED WITHIN A STIPULATED LINES 
        •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.        
        `,
        coordinators:"R NAVEEN ,KANISHKA BHARATHI A ,ILAKKIYA S M ,KRISHNA G",
        timing:"1hrs",
        buttonText: "View More",
      },
  
     
    ];
    const sharedata=(event)=>{
      navigate('/eventdetail', { state: { eventname: event.eventname,
      duration:event.duration,
    description:event.description,
  coordinators:event.coordinators,
timing:event.timing,
eventtype:"/tech"} });
    }
    return (
      <div>
         <div className='Event-Temp-Cont'>
        <div className='titleofeventtype'>
          <h1 className='mobile-view'>{"< Technical Events />"}</h1>
        </div>
        {/* <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" div "}</span><span className='tags'>{">"}</span></h1> */}
        <div className='all-events'>
        {Nontechdatas.map((event, index) => (
          <div class="card" key={index} >
          <p class="card-title">{event.eventname}</p>
          <div className='time-dur'>
            <p className='time'>Time : {event.duration} </p>
            <p className='dur'>Time : {event.timing} </p>
          </div>
          <img className="event-image" src={event.imageSrc} alt="Event" />
          <p class="card-text">
            <span onClick={()=>sharedata(event)}>View More</span>
            <svg class="arrow-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
            </svg>
          </p>
        </div>
        ))}
        </div>
        {/* <h1 st/yle={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" /div "}</span><span className='tags'>{">"}</span></h1> */}
        </div>
      </div>
    )
  }

export default Technical

/*
<div className='box-events' key={index}>
              <h1 style={{margin:"10px"}}></h1>
            <img className="event-image" src={event.imageSrc} alt="Event" />
            <h2 className='closetag tags'></h2>
            <h2 className='view-cont-more'  onClick={()=>sharedata(event)}><a className='view-more-button'>{event.buttonText}</a></h2>
          </div>
          */