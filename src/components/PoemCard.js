import React, { useState, useCallback } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import * as PoemUtils from "./../utils/PoemUtils";

const PoemCard = React.memo(({ title, poem, author }) => {
  const [saved, setSaved] = useState(false);

  const copyPoem = useCallback(() => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    const parts = title ? [title, "\n", poem] : [poem];
    parts.push("\n", "- ", author, "\n", "\n", "https://pillolepoetiche.netlify.app/");
    PoemUtils.copyToClipboard(parts.join(""));
  }, [title, poem, author]);

  return (
    <div className="poem-card">
      {title && <div className="poem-card-title">{title}</div>}
      <div className="poem-card-text">{poem}</div>
      <div className="poem-card-footer">
        <span className="poem-card-author">- {author}</span>
        <button
          className={`copy-btn${saved ? ' copied' : ''}`}
          onClick={copyPoem}
          aria-label="Copia poesia"
        >
          {saved ? <CheckIcon /> : <ContentCopyIcon />}
        </button>
      </div>
    </div>
  );
});

export default PoemCard;
