import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { useStateContext } from '../../stateContext';
import './index.css';

function ResultPanel() {
  const {
    state: { markdown },
  } = useStateContext();

  return (
    <div className="ResultPanel">
      <ReactMarkdown>{ markdown }</ReactMarkdown>
      {/* Here comes the result: { JSON.stringify(markdown) } */}
    </div>
  );
}

export default ResultPanel;
