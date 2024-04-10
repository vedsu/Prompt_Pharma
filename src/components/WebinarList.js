// src/components/WebinarList.js
import React from 'react';
import './WebinarList.css';
import webinars from '../data/webinarsData.json';

function WebinarList() {
  return (
    <div className='webinar'>
    <h2>Live Business Training Events</h2>
    <div className="webinar-list">
    {webinars.webinars.map((webinar) => (
      <div key={webinar.id} className="webinar-box">
        <div className="webinar-content">
          <h3> <strong>{webinar.title}</strong>|Speaker: {webinar.speaker}- {webinar.event.date} at {webinar.event.time} </h3>
          <p>{webinar.corporate.description}</p>
          
          {/* Add more details as needed */}
        </div>
      </div>
      
    ))}
    </div>
    </div>
    
    
    
    // <div>
    //   <h2>Upcoming Webinars</h2>
    //   <ul>
    //     {webinars.webinars.map((webinar) => (
    //       <li key={webinar._id}>
    //         <strong>{webinar.title}</strong> - {webinar.event.date} at {webinar.event.time}
    //         <p>{webinar.corporate.description}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default WebinarList;
