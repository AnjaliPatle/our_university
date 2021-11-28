import {React, useState} from 'react'
import './announcement_tab.css'
import '../../../materialize/css/materialize.css';
import img from '../MaterialTab/sample_image.png'
import AnnouncementOptions from './AnnouncementOptions'



function AnnouncementElement(props) {
  const getAnnouncementDate = () =>{
    if(props.data && props.data.createdAt){
        return props.data.createdAt.toDate().toLocaleTimeString() +", "+ props.data.createdAt.toDate().toDateString();
    }
    else return "";
  }

  return (
    <div className="announcement_element">
        <div className="announcement_section">
    		<div className="announcement_element_poster">
    			<img src={props.data.photoUrl} className="announcement_element_poster_img"/>
                <div className="announcement_element_poster_name">{props.data.posterName?props.data.posterName:'Anjali Patle'}</div>
    		</div>
            <div className="announcement_element_detail">
                <div className="announcement_element_header">
                    <div className="announcement_element_name">{props.data.title}</div>
                    <div className="announcement_element_time"> {getAnnouncementDate()} </div>
                </div>
                <div className="announcement_element_description"> {props.data.description}</div>
            </div>
        </div>
        <AnnouncementOptions/>
    </div>
  );
}

export default AnnouncementElement;
