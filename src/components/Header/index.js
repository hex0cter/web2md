import * as React from 'react';
import './index.css';

function Header() {
  return (
    <div className='Header'>
      <div className="Logo">
        <img src='/images/markdown.png'  className='LogoImage'/>
      </div>
      <div>
        <div className='Title'>
          Web to Markdown
        </div>
        <div className='Subtitle'>
          Convert a webpage into markdown in just two seconds. <br/>
          Paste the web address then hit Enter.
        </div>
      </div>
    </div>
  );
}

export default Header;
