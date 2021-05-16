import * as React from 'react';
import './index.css';
import UrlFetcher from '../UrlFetcher';
import ResultPanel from '../ResultPanel';
import Footer from '../Footer';
import Header from '../Header';

function Main() {
  return (
    <div className="Main">
      <Header />
      <UrlFetcher />
      <ResultPanel />
      <Footer />
    </div>
  );
}

export default Main;
