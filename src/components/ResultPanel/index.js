import * as React from 'react';
import { useStateContext } from '../../stateContext';
import './index.css';

function ResultPanel() {
  const {
    state: { markdown },
  } = useStateContext();

  return (
    <div className="ResultPanel">
      Here comes the result: { JSON.stringify(markdown) }
    </div>
  );
}

export default ResultPanel;
