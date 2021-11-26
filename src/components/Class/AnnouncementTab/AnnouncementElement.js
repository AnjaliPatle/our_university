import {React, useState} from 'react'
import './announcement_tab.css'
import '../../../materialize/css/materialize.css';
import img from '../MaterialTab/sample_image.png'



function AnnouncementElement(props) {

  return (
    <div className="announcement_element">
    		<div className="announcement_element_poster">
    			<img src={img} className="announcement_element_poster_img"/>
    		</div>
            <div className="announcement_element_detail">
                <div className="announcement_element_header">
                    <div className="announcement_element_poster_name">{props.data.posterName?props.data.posterName:'Anjali Patle'} : </div>
                    <div className="announcement_element_name">{props.data.title}</div>
                    <div className="announcement_element_time"> 5:00 PM, 20th Nov </div>
                </div>
                <div className="announcement_element_description"> {props.data.description}</div>
            </div>
    </div>
  );
}

export default AnnouncementElement;
