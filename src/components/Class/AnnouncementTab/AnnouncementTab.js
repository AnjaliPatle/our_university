import {React, useState, useEffect} from 'react'
import AnnouncementElement from './AnnouncementElement'
import Fab from '@mui/material/Fab';
import AddIcon from '@material-ui/icons/Add';
import {addButtonStyle} from '../../../assets/styles.js';
import './announcement_tab.css';
import '../class.css';
import '../../../materialize/css/materialize.css';
import AddAnnouncementModal from './AddAnnouncementModal';
import firebase from "firebase";



function AnnouncementTab(props) {
	const [loading, setLoading]= useState(false);
	const [announcementList,setAnnouncementList]=useState([]);
	const [openAddAnnouncementModal, setOpenAddAnnouncement]= useState(false);

	const getAnnouncements = () =>{
		setLoading(true);
		const db = firebase.firestore();
		db.collection("Classes/"+props.classDetails.classId+"/announcements")
			.orderBy('createdAt','desc').get()
			.then((querySnapshot) => {
				let announcementListFromDB=[];
			    querySnapshot.forEach((doc) => {
			        // doc.data() is never undefined for query doc snapshots
			        announcementListFromDB.push(doc.data());
			        console.log(doc.id, " => ", doc.data());
			    });
			    setAnnouncementList(announcementListFromDB);
			    setLoading(false);
			}).catch((error) => {
				setLoading(false);
			    console.log("Error getting document:", error);
			});		
	}

	 useEffect(() => {
	    getAnnouncements();
	  },[]);

	const saveAnnouncement = (newAnnouncement) => {
		  setLoading(true);
	      const db = firebase.firestore();


            db.collection("Classes/"+props.classDetails.classId+"/announcements").doc().set({
			    title: newAnnouncement.title,
	       		description: newAnnouncement.description,
	       		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	       		photoUrl: props.auth.currentUser.photoURL,
	       		name:props.auth.currentUser.displayName,
			})
			.then(() => {
			    console.log("Document successfully written!");
			    setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
			    console.error("Error writing document: ", error);
			});
		const newAnnouncementList=[...announcementList];
		newAnnouncementList.unshift(newAnnouncement); 
	    setAnnouncementList(newAnnouncementList);
	    setOpenAddAnnouncement(false);
	 };

  return (
  	<div>
  		{loading?
  			<div>loading...</div>
  			:
  			props.userType=='faculty'?
  			<div>
	  			<Fab 
	  				color="primary" 
	  				aria-label="add" 
	  				style={addButtonStyle} 
	  				onClick={()=>setOpenAddAnnouncement(true)}
	  			>
					<AddIcon/>
				</Fab>
				<AddAnnouncementModal 
			      	open={openAddAnnouncementModal} 
			      	handleAddAnnouncementModal={setOpenAddAnnouncement}
			      	saveAnnouncement={saveAnnouncement}
			      	color="primary"
			      />
			</div>
			:null
		}
		{announcementList.length===0? "No Announcements Yet":
			    <div className="announcement_tab">
			      {
			      	announcementList.map((item)=>
			      		 <AnnouncementElement data={item}/>
			      	)
			      }
			      <hr className="end_hr"/>
			      
			    </div>
		}
    </div>
  );
}

export default AnnouncementTab;
