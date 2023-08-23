import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import "./detailevent.css";

function DetailEvent() {
  const location = useLocation();
  const navigate=useNavigate();
  const { state } = location;
console.log(state)
  // Split the description into an array of points
  const descriptionPoints = state.description.split('\n').filter(point => point.trim() !== '');
  const gotoevent=()=>{
    console.log("navigate")
    navigate(`${state.eventtype}`)
  }
  return (
    <div className='main_detail'>
      <div className='enter'>
      <span className='back' onClick={()=>gotoevent()}></span> 
      <h1 id='heading-detail'>{"< Detail Event />"}</h1>
      </div>
      <h1 style={{margin:"10px"}} className='tags_detail'><span className='tags'>{"<"}</span><span className='tagname'>{" main "}</span><span className='tags'>{">"}</span></h1>
      <div className='detail_cont'>
        <div id='detail_inside'>
          <h2 className='detail_head'><span className='tags_event'>{"< "}</span>{state.eventname}<span className='tags_event'>{" />"}</span></h2>
          <h2 className='detail_dura'>Duration: <span style={{color:"white", textShadow:"none"}}>{state.duration}</span> </h2>
          <h2 className='detail_time'>Timing:<span style={{color:"white", textShadow:"none"}}> {state.timing}</span></h2>
          <div>
            <h2 className='detail_descp'>Event description:</h2>
            {/* Map through the description points and render each as a separate <p> element */}
            {descriptionPoints.map((point, index) => (
              <h3 key={index} className='detail_descp_point'>{point}</h3>
            ))}
          </div>
          <h2 className='detail_time'>Coordinators:<span style={{color:"white", textShadow:"none"}}><br/>{state.coordinators}</span> </h2>
          {/* Display other event details */}
        </div>
      </div>
      <h1 style={{margin:"10px"}} className='tags_detail'><span className='tags'>{"<"}</span><span className='tagname'>{" /main"}</span><span className='tags'>{">"}</span></h1>
    </div>
  );
}

export default DetailEvent;
