import * as React from 'react';
import Preview from '../Preview';
import Editable from '../Editable';
import './index.css';

function ResultPanel() {
  return (
    <div className="ResultPanel">
      <Editable />
      <Preview />
    </div>
  );
}

export default ResultPanel;
