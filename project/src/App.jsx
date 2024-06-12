import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <h1>This is my first Application run</h1>
    </div>
  );
}

export default App;