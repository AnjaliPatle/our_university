import {React, useState} from 'react'
import ChatTab from './ChatTab/ChatTab'
import MaterialTab from './MaterialTab/MaterialTab'
import AnnouncementTab from './AnnouncementTab/AnnouncementTab'
import '../../materialize/css/materialize.css';
import './class.css';

function ClassComponent() {

  const [tabName,setTabName]=useState('chat');

  const generateStyle=(givenTabName)=>{
    if(tabName==givenTabName)
        return {'background':'#f38388'};
    else return null;
  }

  return (
    <div style={{marginTop:'50px'}}>
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

      {tabName=='chat'? <div><ChatTab/></div> : null}
      {tabName=='announcements'? <div><AnnouncementTab/></div> : null}
      {tabName=='schedule'? <div>Schedule</div> : null}
      {tabName=='studyMaterials'? <MaterialTab/>: null}

    </div>
  );
}

export default ClassComponent;
