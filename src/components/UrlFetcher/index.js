import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { useStateContext } from '../../stateContext';
import * as actions from '../../actions';
import './index.css';

function UrlFetcher() {
  const { dispatch } = useStateContext();
  const [url, setUrl] = useState('');

  const onUrlChange = ({ target }) => {
    console.log('On change called');
    setUrl(target.value);
  };

  const onClickFetch = async () => {
    const result = await axios.post('https://api.html2markdown.danielhan.dev/v1/convert/dwdwdw');
    const markdown = result.data;
    dispatch({ type: actions.ACTION_UPDATE_MARKDOWN, markdown });
  };

  return (
    <div className='UrlFetcher'>
      <TextField id='standard-basic' label='URL' fullWidth defaultValue={url} onChange={onUrlChange} />
      <div className='FetchButton'>
        <Button variant='contained' color='secondary' onClick={onClickFetch}>Fetch</Button>
      </div>
    </div>
  );
}

export default UrlFetcher;
