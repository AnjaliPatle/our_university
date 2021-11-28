import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {viewModalStyle} from '../../../assets/styles.js';
import '../class.css';



function AddAnnouncementModal(props) {

  const handleClose = () => props.handleViewMaterialModal(false);

  
  return (
    <div>
       <Modal
          open={props.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
       >
        <Box sx={viewModalStyle}>
          <iframe
              src={props.data}
              frameBorder="5px"
              scrolling="auto"
              height="100%"
              width="100%"
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export default AddAnnouncementModal;
