import * as React from 'react';
import './index.css';
import UrlFetcher from '../UrlFetcher';
import ResultPanel from '../ResultPanel';
import Footer from '../Footer';

function Main() {
  return (
    <div className="Main">
      <UrlFetcher />
      <ResultPanel />
      <Footer />
    </div>
  );
}

export default Main;
