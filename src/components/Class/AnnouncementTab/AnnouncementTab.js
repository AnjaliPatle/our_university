import {React, useState} from 'react'
import AnnouncementElement from './AnnouncementElement'
import Fab from '@mui/material/Fab';
import AddIcon from '@material-ui/icons/Add';
import addButtonStyle from '../../../assets/styles.js';
import './announcement_tab.css';
import '../class.css';
import '../../../materialize/css/materialize.css';
import AddAnnouncementModal from './AddAnnouncementModal';
import FireBase from "../../../firebase/firebase";


const sampleAnnouncementList=[
	{
		title:"Announcement 1",
		description:"This is Announcement 1 sample",
		posterName:"Anjali Patle"
	},
	{
		title:"Announcement 2",
		description:"This is Announcement 2 sample",
		posterName:"Anjali Patle"
	}
]
function AnnouncementTab() {
	const [announcementList,setAnnouncementList]=useState(sampleAnnouncementList);
	const [openAddAnnouncementModal, setOpenAddAnnouncement]= useState(false);

	const saveAnnouncement = (newAnnouncement) => {
	    // const saveToFirebase = FireBase.firestore();
	    // saveToFirebase.collection("todos").add({
	    //     title: newAnnouncement.title,
	    //     descripton: newAnnouncement.descripton
	    // });
	    setAnnouncementList([...announcementList, newAnnouncement]);
	    setOpenAddAnnouncement(false);
	  };
	  console.log(announcementList);

  return (
    <div className="announcement_tab">
    	<Fab color="primary" aria-label="add" style={addButtonStyle}>
	       <AddIcon onClick={()=>setOpenAddAnnouncement(true)}/>
	    </Fab>
      {
      	announcementList.map((item)=>
      		 <AnnouncementElement data={item}/>
      	)
      }
      <hr className="end_hr"/>
      <AddAnnouncementModal 
      	open={openAddAnnouncementModal} 
      	handleAddAnnouncementModal={setOpenAddAnnouncement}
      	saveAnnouncement={saveAnnouncement}
      />
    </div>
  );
}

export default AnnouncementTab;
