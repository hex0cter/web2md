import './index.css';
import UrlFetcher from '../UrlFetcher';
import ResultPanel from '../ResultPanel';

function Main() {
  return (
    <div className="Main">
      <UrlFetcher />
      <ResultPanel />
    </div>
  );
}

export default Main;
