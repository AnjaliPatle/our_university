import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {addModalStyle, primaryHeading, accentBackground, textFields} from '../../../assets/styles.js';
import '../class.css';



function AddMaterialModal(props) {

  const [materialTitle, setMaterialTitle]= useState('');
  const [materialDescription, setMaterialDescription]= useState('');
  const [selectedFile, setSelectedFile] = useState();

  const handleClose = () => {
    props.handleMaterialModal(false);
  }

 const onFileChange = (event) => { 
      setSelectedFile(event.target.files[0]); 
 }; 

 const addMaterial=()=>{
    setMaterialDescription('');
    setMaterialTitle('');
    props.saveMaterial({
      title: materialTitle,
      description: materialDescription,
      file:selectedFile
    })
 }
 console.log("file: ",selectedFile);
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
            Add Material
          </Typography>
          <div className="add-material-modal">
          Title:
            <OutlinedInput
              label="Title"
              value={materialTitle}
              onChange={(event)=>setMaterialTitle(event.target.value)} 
              fullWidth 
              style={textFields}
            />
            Description:
            <OutlinedInput
              label="Description"
              multiline
              value={materialDescription}
              onChange={(event)=>setMaterialDescription(event.target.value)}
              maxRows={4}
              fullWidth 
              style={textFields}
            />
            File:
            <input type="file" onChange={(event)=>onFileChange(event)} className="material-input"/>
            <Button variant="contained" 
              style={accentBackground} onClick={addMaterial}>Add Announcement</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AddMaterialModal;
