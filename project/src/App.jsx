import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
//import { Projects } from './components/projects';
function App() {
  return (
    <div className='App'>
     <NavBar/>
     <Banner/>
     <Skills/>
     
  
    </div>
  );
}

export default App;