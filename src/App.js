import { useState } from 'react';
import React from 'react';
import './App.css';
import {
  IconButton,
  Typography
} from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PoemCard from './components/PoemCard';
import PoemCarousel from './components/PoemCarousel';
import * as PoemUtils from "./utils/PoemUtils";
import AuthorList from './components/AuthorList';
import AuthorDialog from './components/AuthorDialog';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from "./components/SearchBar";


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: [
        'Google Sans', // Aggiungi 'Google Sans' come primo font della lista
        'sans-serif', // Aggiungi altri fallback di font qui se necessario
      ].join(','),
    },
  });

  const [selectedPage, setSelectedPage] = useState("HomePage");
  const [randomPoem, setRandomPoem] = useState(PoemUtils.getRandomPoem());
  const [poems, setPoems] = useState(PoemUtils.getRandomizedPoems());
  const [authors, setAuthors] = useState(PoemUtils.getUniqueAuthors());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleRefreshClick = () => {
    setRandomPoem(PoemUtils.getRandomPoem());
    setRotationDegrees(rotationDegrees + 360); // Aggiungiamo 360 gradi ad ogni clic
  };

  const handleRicerca = (event) => {
    const newSearch = event === null ? "" : event.target.value;
    setSearchValue(newSearch);
    if(newSearch === ""){
      setAuthors(PoemUtils.getUniqueAuthors());
    }else{
      const newAuthors = authors.filter(a => a.toLowerCase().includes(newSearch.toLowerCase()));
      setAuthors(newAuthors);
    }
  };
  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ResponsiveAppBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

        <Typography variant="h4" style={{ color: 'white', textAlign: 'center', marginTop: '100px', marginBottom: '20px' }}>
          Poesia casuale <IconButton onClick={handleRefreshClick} aria-label="refresh"><RefreshIcon style={{ transition: 'transform 0.5s ease', transform: `rotate(${rotationDegrees}deg)` }} /></IconButton>
        </Typography>
        <PoemCard author={randomPoem.author} poem={randomPoem.poem} title={randomPoem.title} />
      
        <Typography variant="h4" style={{ color: 'white', textAlign: 'center', marginTop: '60px', marginBottom: '20px' }}>
          Scorri le poesie
        </Typography>
        <PoemCarousel poems={poems}/>

        <Typography variant="h4" style={{ color: 'white', textAlign: 'center', marginTop: '60px', marginBottom: '20px' }}>
          Poesie per autore
        </Typography>
        {/*BARRA DI RICERCA*/}
        <SearchBar searchValue={searchValue} handleRicerca={handleRicerca} centered={true}/>
        {authors.length !== 0 ? <AuthorList authors={authors} onAuthorClick={handleAuthorClick}/> : <></>}
        {authors.length === 0 ? <Typography variant="subtitle1" style={{ color: '#c50000', textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>Nessun risultato!</Typography> : <></>}

        <Typography variant="h6" style={{ color: 'white', textAlign: 'center', marginTop: '60px', marginBottom: '20px' }}>
          Creato da F.C. per Chiara C. ❤️
        </Typography>

        <AuthorDialog open={dialogOpen} onClose={handleDialogClose} author={selectedAuthor} poems={PoemUtils.getPoemsByAuthor(selectedAuthor)} />
      </ThemeProvider>
    </>
  );
}

export default App;
