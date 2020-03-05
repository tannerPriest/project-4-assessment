import React, { useState } from 'react';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

import './App.css';

const App = () => {
  const [selected, setSelected] = useState('2');

  const handleChange = (num) => {
    document.getElementById(selected).classList.remove('selected');
    document.getElementById(`Circle${selected}`).classList.remove('selected')
    setSelected(num)
  }
  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <CircleSelector handleChange={handleChange} selected={selected}/>
        <Circles selected={selected}/>
        By Tanner J Priest
      </main>
    </div>
  );
}

export default App;