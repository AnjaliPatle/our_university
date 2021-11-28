import {React, useState} from 'react'
import ChatTab from './ChatTab/ChatTab'
import MaterialTab from './MaterialTab/MaterialTab'
import AnnouncementTab from './AnnouncementTab/AnnouncementTab'
import TimetableTab from './TimetableTab/TimetableTab'
import '../../materialize/css/materialize.css';
import './class.css';

function ClassComponent(props) {

  const [tabName,setTabName]=useState('chat');

  const generateStyle=(givenTabName)=>{
    if(tabName==givenTabName)
        return {'background':'#f38388'};
    else return null;
  }

  return (
    <div className="class_tab">
        <div className="tab_nav">
              <div className="tab_name"  
                    style={generateStyle('chat')} 
                    onClick={()=>{setTabName('chat')}}
              >
                  Chat
              </div>
              <div className="tab_name" 
                  style={generateStyle('announcements')} 
                  onClick={()=>{setTabName('announcements')}}
              >
                  Announcements
              </div>
              <div className="tab_name" 
                    style={generateStyle('schedule')} 
                    onClick={()=>{setTabName('schedule')}}
              >
                  Schedule
              </div>
              <div className="tab_name" 
                    style={generateStyle('studyMaterials')} 
                    onClick={()=>{setTabName('studyMaterials')}}
              >
                  Study Materials
              </div>
        </div>
        
          {tabName=='chat'?
              <ChatTab 
                classDetails={props.classDetails} 
                auth={props.auth} 
                user={props.user} 
                userType={props.userType}
              />
              : null
          }
          {tabName=='announcements'?
              <AnnouncementTab 
                classDetails={props.classDetails}
                auth={props.auth} 
                user={props.user} 
                userType={props.userType}
              />
              : null
          }
          {tabName=='schedule'? 
            <div><TimetableTab 
                classDetails={props.classDetails}
                auth={props.auth} 
                user={props.user} 
                userType={props.userType}
              /></div> 
            : null
          }
          {tabName=='studyMaterials'?
             <MaterialTab 
                classDetails={props.classDetails}
                auth={props.auth} 
                user={props.user} 
                userType={props.userType}
              />
            : null
          }

    </div>
  );
}

export default ClassComponent;
