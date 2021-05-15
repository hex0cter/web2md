import * as React from 'react';
import { Paper } from '@material-ui/core';
import { useStateContext } from '../../stateContext';
import './index.css';

function Editable() {
  const {
    state: { markdown },
  } = useStateContext();

  return (
    <div className="Editable">
      <Paper elevation={3} className="EditableBlock">
        Here comes the result: { JSON.stringify(markdown) }
      </Paper>
    </div>
  );
}

export default Editable;
