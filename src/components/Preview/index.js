import * as React from 'react';
import { Paper } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { useStateContext } from '../../stateContext';
import './index.css';

function Preview() {
  const {
    state: { markdown },
  } = useStateContext();

  return (
    <div className="Preview">
      <Paper elevation={3} className="PreviewBlock">
        <ReactMarkdown>{ markdown }</ReactMarkdown>
      </Paper>
    </div>
  );
}

export default Preview;
