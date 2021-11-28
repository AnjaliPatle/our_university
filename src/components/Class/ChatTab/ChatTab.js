import {React, useState, useEffect} from 'react'
import '../class.css';
import './chat_tab.css';
import '../../../materialize/css/materialize.css';
import Button from '@mui/material/Button';
import MessageBox from './MessageBox';
import firebase from "firebase";
//import { useCollectionData } from 'react-firebase-hooks/firestore';


function ChatTab(props) {

    const db = firebase.firestore();
	const messagesRef = db.collection("Classes/"+props.classDetails.classId+"/messages");
	const [messages, setMessages]= useState([])
	const [formValue, setFormValue] = useState('');

	useEffect(() => {

	    messagesRef.orderBy("createdAt")
	      .get()
	      .then(querySnapshot => {
	        // Get all documents from collection - with IDs
	        const updatedMessages = querySnapshot.docs.map(doc => ({
	          ...doc.data(),
	          //uid: doc.id,
	        }));
	        // Update messages in state
	        updatedMessages.sort(function (a, b) {
			  return a.createdAt - b.createdAt;
			});
	        setMessages(updatedMessages);
	      })
	      .catch(error => console.error(error));
	   		
	   	  const unsubscribe = messagesRef.onSnapshot(querySnapshot => {
	      // Get all documents from collection - with IDs
	      const updatedMessages = querySnapshot.docs.map(doc => ({
	        ...doc.data(),
	        // uid: doc.id,
	      }));
	      // Update messages in state
	      setMessages(updatedMessages);
	    });

	    return unsubscribe;
  	}, []);


	const sendMessage = async (e) => {
	    e.preventDefault();

	    const {uid, photoURL } = props.auth.currentUser;

	    await messagesRef.add({
	      text: formValue,
	      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	      name:props.auth.currentUser.displayName,
	      uid,
	      photoURL
	    })

	    setFormValue('');
	}

	return(
		<div className="chat_tab">
			<div className="message_section">
				{
					messages.map((msg)=>{
						return <MessageBox 
									type={msg && msg.uid === (props.auth.currentUser?props.auth.currentUser.uid:'') ?'sent':'recieved'}
									message={msg.text}
									sender={msg.name}
								/>
					})
				}
			</div>
			<form onSubmit={sendMessage}>
				<div className="chatbox_area">
					<textarea 
						id="chatbox" 
						className="materialize-textarea" 
						placeholder="Send Message"
						value={formValue} 
						onChange={(e) => setFormValue(e.target.value)}>
					</textarea>
					<Button 
						variant="contained" 
						className="send_button accent_background"
						type="submit" 
						disabled={(formValue==='')}
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	);

}

export default ChatTab;