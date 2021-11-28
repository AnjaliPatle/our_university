import {React, useState, useEffect} from 'react'
import MaterialElement from './MaterialElement'
import Fab from '@mui/material/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../../materialize/css/materialize.css';
import {addButtonStyle} from '../../../assets/styles'
import AddMaterialModal from './AddMaterialModal';
import firebase from "firebase";



function MaterialTab(props) {
	const [loading, setLoading]= useState(false);
	const [materialList,setMaterialList]=useState([]);
	const [openAddMaterialModal, setOpenAddMaterial]= useState(false);

	const getMaterials = () =>{
		setLoading(true);
		const db = firebase.firestore();
		db.collection("Classes/"+props.classDetails.classId+"/materials")
			.orderBy('createdAt','desc').get().then((querySnapshot) => {
				let materialListFromDB=[];
			    querySnapshot.forEach((doc) => {
			        // doc.data() is never undefined for query doc snapshots
			        materialListFromDB.push(doc.data());
			        console.log(doc.id, " => ", doc.data());
			    });
			    setMaterialList(materialListFromDB);
			    setLoading(false);
			}).catch((error) => {
				setLoading(false);
			    console.log("Error getting document:", error);
			});		
	}

	useEffect(() => {
	    getMaterials();
	},[]);

	const saveMaterial = (newMaterial) => {
		setLoading(true)
		const db = firebase.firestore();
	    
		console.log("newMaterial:",newMaterial)
		const storageRef = firebase.storage().ref();

		storageRef.child(newMaterial.file.name).put(newMaterial.file)
		.then((snapshot) => {
			storageRef.child(newMaterial.file.name).getDownloadURL().then((url) => {
				db.collection("Classes/"+props.classDetails.classId+"/materials").doc().set({
				    name:newMaterial.title,
				    description: newMaterial.description,
				    url: url,
		       		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		       		photoUrl: props.auth.currentUser.photoURL,
	       			name:props.auth.currentUser.displayName,
				})
				.then(() => {
					const newMaterialList=[...materialList];
					newMaterialList.unshift({
						newMaterial,
						url:url
					}); 
					setMaterialList(newMaterialList);
					setLoading(false);
				    console.log("Document successfully written!");
				})
				.catch((error) => {
					setLoading(false);
				    console.error("Error writing document: ", error);
				});

			})
			.catch((error)=>{
				console.log("An error occured while uploading the file");
				setLoading(false);

			})
		  console.log('Uploaded a blob or file!');
		});
   
	    setOpenAddMaterial(false);
	};


  return (
  	<div>
  		{loading?
  			<div>loading...</div>
  			:props.userType=='faculty'?
  				<div>
	  			   <Fab color="primary" aria-label="add" style={addButtonStyle}>
				      <AddIcon onClick={()=>setOpenAddMaterial(true)}/>
				  </Fab>
				  <AddMaterialModal 
			      	open={openAddMaterialModal} 
			      	handleAddMaterialModal={setOpenAddMaterial}
			      	saveMaterial= {saveMaterial}
			      	color="primary"
			      />
		      </div>
		    :null
		}
  		{materialList.length===0? 
  			"No Materials Added Yet"
  			:
  			<div className="material_tab">
		      {
		      	materialList.map((item)=>
		      		 <MaterialElement data={item}/>
		      	)
		      }
		      <hr className="end_hr"/>
		    </div>
		}
	</div>
  );
}

export default MaterialTab;
