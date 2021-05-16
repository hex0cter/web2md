import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { useStateContext } from '../../stateContext';
import * as actions from '../../actions';
import './index.css';

function UrlFetcher() {
  const { dispatch } = useStateContext();
  const [url, setUrl] = useState('https://example.com'); // https://medium.com/analytics-vidhya/how-to-create-a-python-library-7d5aea80cc3f

  const validateUrl = (url) => {
    const expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    const regexp = new RegExp(expression);
    return regexp.test(url);
  };

  const onUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const onClickFetch = async () => {
    if (!validateUrl(url)) {
      console.log(`Invalid url: ${url}`);
      return;
    }

    const result = await axios.post(
      'https://api.html2markdown.danielhan.dev/v1/convert',
      { url }
    );
    const markdown = result.data;
    dispatch({ type: actions.ACTION_UPDATE_MARKDOWN, markdown });
  };

  return (
    <div className='UrlFetcher'>
      <TextField id='standard-basic' label='Fill in a web address' fullWidth defaultValue={url} onChange={onUrlChange} />
      <div className='FetchButton'>
        <Button variant='contained' color='secondary' onClick={onClickFetch}>Fetch</Button>
      </div>
    </div>
  );
}

export default UrlFetcher;
