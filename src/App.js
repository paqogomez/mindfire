import React from 'react';
import './App.css';
import Earthquakes from './components/earthquakes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Earthquakes close to you.
        </p>
      </header>
      <Earthquakes></Earthquakes>
    </div>
  );
}

export default App;
