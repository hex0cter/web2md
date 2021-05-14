import * as React from 'react';
import './index.css';
import { Button, TextField } from '@material-ui/core';

function UrlFetcher() {
  return (
    <div className="UrlFetcher">
      <TextField id="standard-basic" label="URL" fullWidth />
      <div className="FetchButton">
        <Button variant="contained" color="secondary">Fetch</Button>
      </div>
    </div>
  );
}

export default UrlFetcher;
