import {React, useState} from 'react'
import '../class.css';
import './chat_tab.css';
import '../../../materialize/css/materialize.css';
import Button from '@mui/material/Button';



function MessageBox(props) {
	return(
		<div className="message_box">
			{props.message}
		</div>
	);

}

export default MessageBox;