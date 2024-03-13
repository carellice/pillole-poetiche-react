import React, { useState } from 'react';
import { Grid, IconButton, Paper, Typography, useMediaQuery } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import * as PoemUtils from "./../utils/PoemUtils";

const PoemCard = ({ title, poem, author }) => {

  const [saved, setSaved] = useState(false);

  const copyPoem = () => {
    console.log("copy poem");
    console.log("copy poem -> author: ", author);
    console.log("copy poem -> poem: ", poem);
    console.log("copy poem -> title: ", title);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
    if (title === "") {
      const toCopy = [poem, "\n", "- ", author, "\n", "\n", "https://pillolepoetiche.netlify.app/"].join("");
      console.log("copy poem -> toCopy: ", toCopy);
      PoemUtils.copyToClipboard(toCopy);
    } else {
      const toCopy = [title, "\n", poem, "\n", "- ", author, "\n", "\n", "https://pillolepoetiche.netlify.app/"].join("");
      console.log("copy poem -> toCopy: ", toCopy);
      PoemUtils.copyToClipboard(toCopy);
    }
  }

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Paper
      style={{
        padding: 20,
        background: '#f9f7f1',
        maxWidth: isMobile ? '100%' : '800px',
        margin: isMobile ? 20 : 'auto',
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
      <Grid container justifyContent="flex-end">
        <IconButton style={{ color: 'black' }} onClick={copyPoem} aria-label="copy poem">
          {saved ? <CheckIcon /> : <ContentCopyIcon />}
        </IconButton>
      </Grid>
    </Paper>
  );
}

export default PoemCard;