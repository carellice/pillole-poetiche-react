import React from 'react';
import { Paper, Typography, useMediaQuery } from '@mui/material';

const PoemCard = ({ title, poem, author }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Paper
      style={{
        padding: 20,
        margin: 20,
        background: '#f9f7f1',
        maxWidth: isMobile ? '100%' : '800px',
        margin: 'auto',
      }}
    >
      {title && (
        <Typography variant="h3" gutterBottom style={{ color: 'black', fontFamily: 'Caveat' }}>
          {title}
        </Typography>
      )}
      <Typography variant="body1" paragraph style={{ color: 'black', fontFamily: 'Caveat', fontSize: '1.5rem' }}>
        {poem}
      </Typography>
      <Typography variant="caption" style={{ fontFamily: 'Caveat', fontSize: '1.2rem', color: 'black' }}>
        - {author}
      </Typography>
    </Paper>
  );
}

export default PoemCard;
