import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as PoemUtils from "./../utils/PoemUtils";

const AuthorList = React.memo(({ authors, onAuthorClick }) => {
  return (
    <div className="author-list">
      {authors.map((author, index) => {
        const count = PoemUtils.getNumberOfPoemsByAuthor(author);
        return (
          <button
            key={index}
            className="author-item"
            onClick={() => onAuthorClick(author)}
          >
            <div className="author-avatar">
              {author.charAt(0).toUpperCase()}
            </div>
            <div className="author-info">
              <div className="author-name">{author}</div>
              <div className="author-count">
                {count} {count === 1 ? 'poesia' : 'poesie'}
              </div>
            </div>
            <div className="author-arrow">
              <ChevronRightIcon />
            </div>
          </button>
        );
      })}
    </div>
  );
});

export default AuthorList;
