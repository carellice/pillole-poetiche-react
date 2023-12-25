import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';


const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <BookIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', fontWeight:'bold' }}>
          PILLOLE POETICHE
        </Typography>
        <IconButton color="inherit">
          <BookIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
