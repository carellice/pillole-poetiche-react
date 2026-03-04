import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = React.memo(({ handleRicerca, searchValue }) => {
  return (
    <div className="search-bar">
      <SearchIcon />
      <input
        type="text"
        placeholder="Cerca autore..."
        value={searchValue}
        onChange={handleRicerca}
      />
      {searchValue && (
        <button
          className="search-clear-btn"
          onClick={() => handleRicerca(null)}
          aria-label="Cancella ricerca"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
});

export default SearchBar;
