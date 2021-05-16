import * as React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './index.css';
import { useStateContext } from '../../stateContext';
import * as actions from '../../actions';

const mdParser = new MarkdownIt(/* Markdown-it options */);

function ResultPanel() {
  const { dispatch } = useStateContext();

  const {
    state: { markdown },
  } = useStateContext();

  const handleEditorChange = ({ html, text }) => {
    console.log('handleEditorChange', html, text);
    dispatch({ type: actions.ACTION_UPDATE_MARKDOWN, markdown: text });
  };

  return (
    <div className='ResultPanel'>
      <MdEditor
        value={markdown}
        style={{ minHeight: '500px', width: '100%' }}
        renderHTML={(markdown) => mdParser.render(markdown)}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default ResultPanel;
