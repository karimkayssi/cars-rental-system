import React, { useState } from 'react';
import './App.css';

import ActionBar from './components/ActionBar';
import Carousel from './components/Carousel';

function App() {

  const [expanded, setExpanded] = useState(true);

  return (
    <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ActionBar toggle={() => setExpanded(prev => !prev)} isOn={expanded} />
      <div style={{ flex: 1 }}>
        <Carousel expanded={expanded} />
      </div>
    </div>
  );
}

export default App;
