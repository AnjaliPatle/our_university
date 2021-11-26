import {React, useState} from 'react'
import './materialTab.css'
import '../../../materialize/css/materialize.css';
import img from './sample_image.png'
import doc from './sample_document.pdf'



function MaterialElement(props) {

  return (
    <div className="material_element">
    	<div className="material_element_header">
    		<div className="material_element_poster">
    			<img src={img} className="material_element_poster_img"/>
    			<div className="material_element_poster_name">{props.data.posterName} : </div>
    		</div>
    		<div className="material_element_name">{props.data.name}</div>
    		<div className="material_element_time"> 5:00 PM, 20th Nov </div>
    	</div>
    	<hr/>
    	<div className="material_element_description"> {props.data.description}</div>
    	<div className="material_file">
    		<iframe
			    src={img}
			    frameBorder="0"
			    scrolling="auto"
			    height="60%"
			    width="70%"
			></iframe>
    	</div>
    </div>
  );
}

export default MaterialElement;
