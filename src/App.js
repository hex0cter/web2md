import * as React from 'react';
import './App.css';
import { StateProvider } from './state-context';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Main />
      </StateProvider>
    </div>
  );
}

export default App;
