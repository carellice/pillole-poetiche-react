// AuthorDialog.js
import React from 'react';
import {Box, Dialog, DialogTitle, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PoemCard from './PoemCard';

const AuthorDialog = ({ open, onClose, author, poems }) => {

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <DialogTitle>
        {author}
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close" style={{ position: 'absolute', top: '8px', right: '22px' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {poems.map((poem, index) => (
        // <Accordion key={index} expanded={expandedAccordion === `panel-${index}`} onChange={handleAccordionChange(`panel-${index}`)}>
        // <Accordion key={index} expanded={true} onChange={handleAccordionChange(`panel-${index}`)}>
        //   <AccordionSummary>
        //     <Typography>{poem.title !== "" ? poem.title : 'Poesia ' + (index + 1)}</Typography>
        //   </AccordionSummary>
        //   <AccordionDetails>
        //     <Typography>{poem.poem}</Typography>
        //   </AccordionDetails>
        // </Accordion>
          <>
            <PoemCard author={poem.author} poem={poem.poem} title={poem.title}/>
            <Box style={{marginTop:70}}/>
          </>
      ))}
    </Dialog>
  );
}

export default AuthorDialog;
