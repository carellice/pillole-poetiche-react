import React, { useState, useEffect, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PoemCard from './PoemCard';

const AuthorDialog = ({ open, onClose, author, poems }) => {
  const [closing, setClosing] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
    }
  }, [open]);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      onClose();
    }, 280);
  }, [onClose]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`author-sheet-overlay${closing ? ' closing' : ''}`}
        onClick={handleOverlayClick}
      />
      <div className={`author-sheet${closing ? ' closing' : ''}`}>
        <div className="author-sheet-handle" />
        <div className="author-sheet-header">
          <span className="author-sheet-title">{author}</span>
          <button
            className="author-sheet-close"
            onClick={handleClose}
            aria-label="Chiudi"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="author-sheet-content">
          {poems.map((poem, index) => (
            <PoemCard
              key={index}
              author={poem.author}
              poem={poem.poem}
              title={poem.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AuthorDialog;
