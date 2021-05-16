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
          Convert a webpage into markdown has never been easier.  <br/>
          Just paste the web address and presss on the button.
        </div>
      </div>
    </div>
  );
}

export default Header;
