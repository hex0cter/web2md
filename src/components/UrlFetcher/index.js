import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { useStateContext } from '../../stateContext';
import * as actions from '../../actions';
import './index.css';

function UrlFetcher() {
  const { dispatch } = useStateContext();
  const [url, setUrl] = useState('');
  const [markdown, setMarkdown] = useState('');

  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    setMarkdown(result.data);
  });

  return (
    <div className='UrlFetcher'>
      <TextField id='standard-basic' label='URL' fullWidth defaultValue={url} onChange={(event) => setUrl(event.target.value)}/>
      <div className='FetchButton'>
        <Button variant='contained' color='secondary' onClick={() => dispatch({ type: actions.ACTION_UPDATE_MARKDOWN, markdown })}>Fetch</Button>
      </div>
    </div>
  );
}

export default UrlFetcher;
