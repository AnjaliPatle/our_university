import {React, useState} from 'react'
import '../class.css';
import './chat_tab.css';
import '../../../materialize/css/materialize.css';
import Button from '@mui/material/Button';
import MessageBox from './MessageBox';



function ChatTab() {
	return(
		<div>
			<MessageBox message={"hello"}/>
			<MessageBox message={"hello"}/>
			<div className="chatbox_area">
				<textarea id="chatbox" className="materialize-textarea"></textarea>
				<Button variant="contained" className="send_button">Send</Button>
				</div>
		</div>
	);

}

export default ChatTab;