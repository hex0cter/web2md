import * as React from 'react';
import { useStateContext } from '../../state-context';
import './index.css';

function ResultPanel() {
  const {
    state: {url},
  } = useStateContext();

  return (
    <div className="ResultPanel">
      Here comes the result: {url}
    </div>
  );
}

export default ResultPanel;
