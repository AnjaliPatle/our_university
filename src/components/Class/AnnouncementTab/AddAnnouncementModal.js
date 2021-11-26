import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import '../class.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AddAnnouncementModal(props) {

  const [announcementTitle, setAnnouncementTitle]= useState('');
  const [announcementDescription, setAnnouncementDescription]= useState('');
  const handleClose = () => props.handleAddAnnouncementModal(false);

  
 
 const addAnnouncement=()=>{
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
        <Box sx={style}>
          <Typography 
              id="modal-modal-title" 
              variant="h5" 
              component="h2"
            >
            Add Announcement
          </Typography>
          <div>
            <OutlinedInput
              label="Title"
              value={announcementTitle}
              onChange={(event)=>setAnnouncementTitle(event.target.value)} 
              fullWidth 
            />
            <OutlinedInput
              label="Descripton"
              multiline
              value={announcementDescription}
              onChange={(event)=>setAnnouncementDescription(event.target.value)}
              maxRows={4}
              fullWidth 
            />
            <Button variant="contained" onClick={addAnnouncement}>Add Announcement</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AddAnnouncementModal;
