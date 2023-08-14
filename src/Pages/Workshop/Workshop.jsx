import React from "react";
import "./workshop.css";
import { useNavigate } from "react-router-dom";
import {FaConnectdevelop,FaDatabase, FaWifi} from 'react-icons/fa';
import { GiRobotAntennas } from 'react-icons/gi';

function Workshop() {
  const navigate = useNavigate();

  let workshopdata = [
    {
      eventname: "Advanced Web Development",
      iconsrc:<FaDatabase className="work_card__icon"/>,
      // imageSrc: p5,
      duration: "10",

      description: 
      `A single team must consist of 2 members
      •	The overall competition consists of three rounds.
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "Continue Learning",
    },
    {
      eventname: "Basic Networking",
      // imageSrc: p5,
      iconsrc:<FaWifi className="work_card__icon"/>,
      duration: "10",
      description: `A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "Continue Learning",
    },
    {
      eventname: "Machine Learning and Deep Learning",
      iconsrc:<FaConnectdevelop className="work_card__icon"/>,
      duration: "10",
      description: `A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "Continue Learning",
    },
    {
      eventname: "AI Integration with ChatGPT",
      iconsrc: <GiRobotAntennas className="work_card__icon"/>,
      duration: "10",
      description: `A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "Continue Learning",
    },
  ];

  const shareData = (event) => {
    console.log("event name: ", event.eventname);
    navigate("/workdetail", {
      state: {
        eventname: event.eventname || "",
        duration: event.duration || "",
        description: event.description || "",
        coordinators: event.coordinators || "",
        timing: event.timing || "",
        eventtype:"/workshop"
      },
    });
  };

  return (
    <div>
      <div class="work_back">
        <div class="work_cont">
          <div className="Workshop_title">
            <h1 className="mobile-view">{"< Workshops />"}</h1>
          </div>
              
          <div class="work_card__container">
            {workshopdata.map((event, index) => (
              <article class="work_card__article work_card__orange" key={index}>
                <div class="work_card__scale-1"></div>
                <div class="work_card__scale-2"></div>

                <div class="work_card__shape-1">
                  <div class="work_card__shape-2"></div>
                  <div class="work_card__shape-3">
                    {event.iconsrc}
                  </div>
                </div>
                <div class="work_card__data">
                  
                  <h2 className="work_card__title"><span className="work_tags">{"<"}</span>{event.eventname}<span className="work_tags">{"/>"}</span></h2>
                  <p className="work_card_description">{event.eventdescription}</p>
                  <a
                    // href="#"
                    class="work_card__button"
                    onClick={() => {
                      shareData(event);
                    }}
                  >
                    {event.buttonText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Workshop;
