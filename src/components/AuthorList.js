// AuthorList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import * as PoemUtils from "./../utils/PoemUtils"

const AuthorList = ({ authors, onAuthorClick }) => {
  return (
    <List style={{ maxWidth: "500px", margin: 'auto', backgroundColor: '#5b5b5c', padding: '10px' }}>
      {authors.map((author, index) => (
        <ListItem button key={index} onClick={() => onAuthorClick(author)}>
          <PersonIcon style={{ marginRight: '8px' }} />
          <ListItemText primary={author} secondary={PoemUtils.getNumberOfPoemsByAuthor(author)} />
        </ListItem>
      ))}
    </List>
  );
}

export default AuthorList;
