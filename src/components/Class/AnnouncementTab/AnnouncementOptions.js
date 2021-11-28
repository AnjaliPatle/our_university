import {React, useState} from 'react'
import './announcement_tab.css'
import '../../../materialize/css/materialize.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import img from '../MaterialTab/sample_image.png'



function AnnouncementOptions(props) {

  return (
    <div className="announcement_options">
        <Button variant="outlined" startIcon={<EditIcon />}>
            Edit
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
            Delete
        </Button>
    </div>
  );
}

export default AnnouncementOptions;