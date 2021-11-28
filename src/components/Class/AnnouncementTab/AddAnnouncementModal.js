import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {addModalStyle, primaryHeading, accentBackground, textFields} from '../../../assets/styles.js';
import '../class.css';



function AddAnnouncementModal(props) {

  const [announcementTitle, setAnnouncementTitle]= useState('');
  const [announcementDescription, setAnnouncementDescription]= useState('');
  const handleClose = () => props.handleAddAnnouncementModal(false);

  
 
 const addAnnouncement=()=>{
    setAnnouncementTitle('');
    setAnnouncementDescription('');
    props.saveAnnouncement({
      title: announcementTitle,
      description: announcementDescription
    })
 }
  return (
    <div>
       <Modal
          open={props.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
       >
        <Box sx={addModalStyle}>
          <Typography 
              id="modal-modal-title" 
              variant="h5" 
              component="h2"
              style={primaryHeading}
            >
            Add Announcement
          </Typography>
          <div>
            Title:
            <OutlinedInput
              label="Title"
              value={announcementTitle}
              onChange={(event)=>setAnnouncementTitle(event.target.value)} 
              fullWidth 
              style={textFields}
            />
            Description:
            <OutlinedInput
              label="Descripton"
              multiline
              value={announcementDescription}
              onChange={(event)=>setAnnouncementDescription(event.target.value)}
              maxRows={4}
              fullWidth 
              style={textFields}
            />
            <Button variant="contained" className="add-material-button"
              style={accentBackground} onClick={addAnnouncement}>Add Announcement</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AddAnnouncementModal;
