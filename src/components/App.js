import React from 'react';
import '../styles/main.css';

import Navbar from './Navbar.js';
import Content from './Content.js';

function App() {
  return (
    <div className='App'>
      <div className='background' />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
