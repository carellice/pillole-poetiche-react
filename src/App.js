import { useState } from 'react';
import React from 'react';
import './App.css';
import { Button, Snackbar, Typography } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PoemCard from './components/PoemCard';
import PoemCarousel from './components/PoemCarousel';
import * as PoemUtils from "./utils/PoemUtils";
import AuthorList from './components/AuthorList';
import AuthorDialog from './components/AuthorDialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [selectedPage, setSelectedPage] = useState("HomePage");
  const [randomPoem, setRandomPoem] = useState(PoemUtils.getRandomPoem());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ResponsiveAppBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        <Typography variant="h4" style={{ color: 'white', textAlign: 'center', marginTop: '100px', marginBottom: '20px', fontFamily: 'Pacifico' }}>
          Poesia casuale
        </Typography>
        <PoemCard author={randomPoem.author} poem={randomPoem.poem} title={randomPoem.title} />
      
        <Typography variant="h4" style={{ color: 'white', textAlign: 'center', marginTop: '60px', marginBottom: '20px', fontFamily: 'Pacifico' }}>
          Scorri le poesie
        </Typography>
        <PoemCarousel poems={PoemUtils.getRandomizedPoems()}/>

        <Typography variant="h4" style={{ color: 'white', textAlign: 'center', marginTop: '60px', marginBottom: '20px', fontFamily: 'Pacifico' }}>
          Poesie per autore
        </Typography>
        <AuthorList authors={PoemUtils.getUniqueAuthors()} onAuthorClick={handleAuthorClick}/>

        <Typography variant="h6" style={{ color: 'white', textAlign: 'center', marginTop: '60px', marginBottom: '20px', fontFamily: 'Pacifico' }}>
          Creato da F.C. per Chiara C. ❤️
        </Typography>

        <AuthorDialog open={dialogOpen} onClose={handleDialogClose} author={selectedAuthor} poems={PoemUtils.getPoemsByAuthor(selectedAuthor)} />
      </ThemeProvider>
    </>
  );
}

export default App;
