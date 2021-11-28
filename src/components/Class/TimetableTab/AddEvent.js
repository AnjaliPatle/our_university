import {React, useState} from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import {accentBackground, textFields} from '../../../assets/styles.js';
import './timetable_tab.css';
import firebase from "firebase";


function AddEvent(props) {

	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState('');
	const [endDate, setEndDate] = useState('');
	const today= new Date();

	const getFormattedDisplayDate = (displayDate) =>{
	    return displayDate!==''?
	              displayDate.getDate()+'/'+(displayDate.getMonth()+1)+'/'+displayDate.getFullYear()
	              :''
	}

	const getEventDetails = () =>{
		return {
			title: title,
            start: props.displayDate.toISOString().substr(0,10),
            end: endDate+"T23:59:00"
		}
	}
	return(
		<div className="event-details-tab" >
			<div className="start-date-event">
				<div className="date-label">
					START DATE:
				</div>
				{getFormattedDisplayDate(props.displayDate)}
			</div>
			<div>
				<div className="date-label">
					ENTER END DATE: (in YYYY-MM-DD)
				</div>
				
				<OutlinedInput
	              label="End Date"
	              value={endDate}
	              onChange={(event)=>setEndDate(event.target.value)}
	              fullWidth 
	              style={textFields}
	            />

	            <div className="date-label">
					ENTER TITLE: 
				</div>

	            <OutlinedInput
	              label="Event Title"
	              value={title}
	              onChange={(event)=>setTitle(event.target.value)}
	              fullWidth 
	              style={textFields}
	            />
			</div>
        	<Button variant="contained" 
        		style={accentBackground} 
        		className="add_event_button"
        		onClick={()=>props.addEvent(getEventDetails())}
        	>
        		Add Event
        	</Button>
        </div>
	);
}

export default AddEvent;