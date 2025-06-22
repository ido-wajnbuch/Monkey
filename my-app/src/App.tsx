import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useToggle } from './useToggle';

function App() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div className="App">
      <button onClick={() => toggle()}>{isToggled ? 'Working Out' : 'Watching TV'}</button>
    </div>
  );
}

export default App;
