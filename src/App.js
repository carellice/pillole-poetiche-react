import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import BottomNav from './components/BottomNav';
import PoemCard from './components/PoemCard';
import PoemExplorer from './components/PoemExplorer';
import AuthorList from './components/AuthorList';
import AuthorDialog from './components/AuthorDialog';
import SearchBar from './components/SearchBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import * as PoemUtils from './utils/PoemUtils';

const allAuthors = PoemUtils.getUniqueAuthors();
const shuffledPoems = PoemUtils.getRandomizedPoems();

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [randomPoem, setRandomPoem] = useState(() => PoemUtils.getRandomPoem());
  const [poemKey, setPoemKey] = useState(0);
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const handleRefreshClick = useCallback(() => {
    setRandomPoem(PoemUtils.getRandomPoem());
    setRotationDegrees((prev) => prev + 360);
    setPoemKey((prev) => prev + 1);
  }, []);

  const filteredAuthors = useMemo(() => {
    if (!searchValue) return allAuthors;
    return allAuthors.filter((a) =>
      a.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  const handleRicerca = useCallback((event) => {
    setSearchValue(event === null ? '' : event.target.value);
  }, []);

  const handleAuthorClick = useCallback((author) => {
    setSelectedAuthor(author);
    setDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const authorPoems = useMemo(
    () => (selectedAuthor ? PoemUtils.getPoemsByAuthor(selectedAuthor) : []),
    [selectedAuthor]
  );

  return (
    <div className="app">
      <ResponsiveAppBar />

      <main className="app-content">
        {activeTab === 'home' && (
          <div className="tab-panel">
            <div className="home-tab">
              <div className="home-subtitle">La tua pillola del giorno</div>
              <div className="home-poem-wrapper" key={poemKey}>
                <PoemCard
                  author={randomPoem.author}
                  poem={randomPoem.poem}
                  title={randomPoem.title}
                />
              </div>
              <button
                className="refresh-btn"
                onClick={handleRefreshClick}
                aria-label="Nuova poesia"
              >
                <RefreshIcon
                  style={{
                    transform: `rotate(${rotationDegrees}deg)`,
                    transition: 'transform 0.5s ease',
                  }}
                />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'esplora' && (
          <div className="tab-panel">
            <PoemExplorer poems={shuffledPoems} />
          </div>
        )}

        {activeTab === 'autori' && (
          <div className="tab-panel">
            <div className="authors-tab">
              <SearchBar
                searchValue={searchValue}
                handleRicerca={handleRicerca}
              />
              {filteredAuthors.length > 0 ? (
                <AuthorList
                  authors={filteredAuthors}
                  onAuthorClick={handleAuthorClick}
                />
              ) : (
                <div className="no-results">Nessun risultato</div>
              )}
            </div>
          </div>
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      <AuthorDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        author={selectedAuthor}
        poems={authorPoems}
      />
    </div>
  );
}

export default App;
