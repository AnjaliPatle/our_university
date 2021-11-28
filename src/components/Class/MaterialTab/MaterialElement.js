import {React, useState} from 'react'
import './materialTab.css'
import '../../../materialize/css/materialize.css';
import ViewMaterialModal from './ViewMaterialModal';
import LaunchIcon from '@material-ui/icons/Launch';



function MaterialElement(props) {

  const [openViewMaterialModal, setOpenViewMaterialModel] = useState(false);


  const getMaterialDate = () =>{
    if(props.data && props.data.createdAt){
        return props.data.createdAt.toDate().toLocaleTimeString() +", "+ props.data.createdAt.toDate().toDateString();
    }
    else return "";
  }

  return (
    <div className="material_element">
    	<div className="material_element_header">
    		<div className="material_element_poster">
    			<img src={props.data.photoUrl} className="material_element_poster_img"/>
    			<div className="material_element_poster_name">{props.data.name} : </div>
    		</div>
    		<div className="material_element_name">{props.data.name}</div>
    		<div className="material_element_time"> {getMaterialDate(props.data.createdAt)}</div>
    	</div>
    	<hr/>
    	<div className="material_element_description"> {props.data.description}</div>
    	<div className="material_element_file">
    		<iframe
			    src={props.data.url}
			    frameBorder="5px"
			    scrolling="auto"
			    height="100%"
			    width="100%"
			></iframe>
            <LaunchIcon onClick={()=>setOpenViewMaterialModel(true)}/>
    	</div>
        <ViewMaterialModal open={openViewMaterialModal} handleViewMaterialModal={setOpenViewMaterialModel} data={props.data.url}/>
    </div>
  );
}

export default MaterialElement;
