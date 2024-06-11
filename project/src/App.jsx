import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar.jsx';
//import About from './components/about.jsx';
//import Projects from './components/projects.jsx';
//import Contact from './components/contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <section id="navbar">
          <NavBar />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
    </div>
  );
}

export default App;
