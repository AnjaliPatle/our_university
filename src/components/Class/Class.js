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
              <div className="tab_name"  style={generateStyle('chat')} onClick={()=>{setTabName('chat')}}>
                  Chat
              </div>
              <div className="tab_name" style={generateStyle('announcements')} onClick={()=>{setTabName('announcements')}}>
                  Announcements
              </div>
              <div className="tab_name" style={generateStyle('schedule')} onClick={()=>{setTabName('schedule')}}>
                  Schedule
              </div>
              <div className="tab_name" style={generateStyle('studyMaterials')} onClick={()=>{setTabName('studyMaterials')}}>
                  Study Materials
              </div>
        </div>
        
          {tabName=='chat'?<ChatTab auth={props.auth} user={props.user}/>: null}
          {tabName=='announcements'? <div><AnnouncementTab auth={props.auth} user={props.user}/></div> : null}
          {tabName=='schedule'? <div><TimetableTab auth={props.auth} user={props.user}/></div> : null}
          {tabName=='studyMaterials'? <MaterialTab auth={props.auth} user={props.user}/>: null}

    </div>
  );
}

export default ClassComponent;
