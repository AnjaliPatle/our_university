import {React, useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import Button from '@mui/material/Button';
import AddEvent from './AddEvent'
import {accentBackground, textFields} from '../../../assets/styles.js';
import './timetable_tab.css';
import firebase from "firebase";


function TimetableTab(props) {

   const [loading, setLoading]=useState(false);
   const [displayDate, setDisplayDate]=useState('');
   const [displayEvent, setDisplayEvent]=useState('');
   const [eventList, setEventList]=useState([]);

  const getFormattedDisplayDate = () =>{
    return displayDate!==''?
          displayDate.getDate()+'/'+(displayDate.getMonth()+1)+'/'+displayDate.getFullYear()
          :''
  }

  const canAddEvent = () =>{
    let today = new Date().toISOString().slice(0,10);
    return displayDate.toISOString().slice(0,10)>=today;
  }

  const getAnnouncements = () =>{
    setLoading(true);
    const db = firebase.firestore();
    db.collection("Classes/"+props.classDetails.classId+"/events").get().then((querySnapshot) => {
      console.log("what")
      let eventListFromDB=[];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            eventListFromDB.push(doc.data());
            console.log(doc.id, " => ", doc.data());
        });
        setEventList(eventListFromDB);
        setLoading(false);
    }).catch((error) => {
      setLoading(false);
        console.log("Error getting document:", error);
    });   
  }



  useEffect(() => {
    getAnnouncements();
  },[]);

  console.log("in hooks",displayEvent)

  const saveEvent = (newEvent) => {
      setLoading(true);
      const db = firebase.firestore();

      db.collection("Classes/"+props.classDetails.classId+"/events").doc()
        .set(newEvent)
      .then(() => {
          console.log("Document successfully written!");
          setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
          console.error("Error writing document: ", error);
      });
    const newEventList=[...eventList, newEvent];
      setEventList(newEventList);
   };

  return (
    <div className="timetable_tab" >
      <div style={{'width': '60%', display: 'inline-block'}}>
      	<FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
      
          dateClick={
            function(arg){
              setDisplayDate(new Date(arg.dateStr))
            }
          }

          eventClick={
            function(arg){
              setDisplayEvent(arg.date)
            }
          }
          allDay="true"
          displayEventTime ="false"
          height="70vh"
          style={props.userType=='faculty'?{width:'100%'}:null}
          selectable="true"
          editable="true"
          eventTimeFormat= {{
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            meridiem: false
          }}
          nextDayThreshold="00:00"
          events={eventList}
        />
      </div>
      {props.userType=='faculty'?
          <div className="timetable_details">
            {
              displayDate===''?
                  <div className="no_date_text">Select Date To Add Event</div>
                :
                  <div className="timetable_event_details">
                      <div className="timetable_date">
                        {getFormattedDisplayDate()}
                      </div>
                      {canAddEvent()? <AddEvent addEvent={saveEvent} displayDate={displayDate}/> : null}
                  </div>
            }
          </div>
          :null
      }
    </div>
  );
}

export default TimetableTab;
