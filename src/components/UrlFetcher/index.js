import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useStateContext } from '../../state-context';
import * as actions from '../../actions';
import './index.css';

function UrlFetcher() {
  const { dispatch } = useStateContext();
  const [url, setUrl] = useState('');

  return (
    <div className='UrlFetcher'>
      <TextField id='standard-basic' label='URL' fullWidth defaultValue={url} onChange={(event) => setUrl(event.target.value)}/>
      <div className='FetchButton'>
        <Button variant='contained' color='secondary' onClick={() => dispatch({type: actions.ACTION_UPDATE_URL, url})}>Fetch</Button>
      </div>
    </div>
  );
}

export default UrlFetcher;
