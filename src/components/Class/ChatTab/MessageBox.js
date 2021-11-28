import {React, useState} from 'react'
import '../class.css';
import './chat_tab.css';
import '../../../materialize/css/materialize.css';
import Button from '@mui/material/Button';



function MessageBox(props) {
	return(
		<div className={props.type=='sent'?"sent_message message" :"recieved_message message"}>
			<div className="message_sender">
				{props.sender? props.sender : ''}
			</div>
			{props.message}
		</div>
	);

}

export default MessageBox;