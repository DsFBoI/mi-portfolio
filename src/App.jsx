import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

