import React, { useState } from 'react';
import axios from 'axios';
// import { Button, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import { useStateContext } from '../../stateContext';
import * as actions from '../../actions';
import './index.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function UrlFetcher() {
  const { dispatch } = useStateContext();
  const [url, setUrl] = useState('https://example.com'); // https://medium.com/analytics-vidhya/how-to-create-a-python-library-7d5aea80cc3f
  const [isSnackBarOpen, setSnackBarOpen] = useState(false);
  const [isBackdropOpen, setBackdropOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackBarOpen(false);
  };

  const validateUrl = (url) => {
    const expression = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    const regexp = new RegExp(expression);
    return regexp.test(url);
  };

  const onUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const onKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await onClickFetch();
      event.preventDefault();
    }
  };

  const onFocus = ({ target }) => {
    target.select();
  };

  const onClickFetch = async () => {
    if (!validateUrl(url)) {
      setSnackBarOpen(true);
      return;
    }

    setBackdropOpen(true);
    const result = await axios.post(
      'https://api.html2markdown.danielhan.dev/v1/convert',
      { url }
    );
    setBackdropOpen(false);

    const markdown = result.data;
    dispatch({ type: actions.ACTION_UPDATE_MARKDOWN, markdown });
  };

  const classes = useStyles();

  return (
    <div className='UrlFetcher'>
      <TextField id='standard-basic'
        label='Fill in a web address'
        fullWidth
        autoFocus
        defaultValue={url}
        onChange={onUrlChange}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
        placeholder='https://example.com'
      />
      <div className='FetchButton'>
        <Button variant='contained' color='secondary' onClick={onClickFetch}>Fetch</Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isSnackBarOpen}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          This is an invalid URL. Please try something else.
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={isBackdropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default UrlFetcher;
