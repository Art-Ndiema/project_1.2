import React from 'react';
import './App.css';
//import { NavBar } from './components/NavBar.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';

function App() {
  return (
    <div className="Navbar">
      <NavBar/>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <h1>kuku kuku</h1>
    </div>
  );
}

export default App;
