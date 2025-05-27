import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link> |{" "}
        <Link to="/about">Sobre mí</Link> |{" "}
        <Link to="/projects">Proyectos</Link> |{" "}
        <Link to="/skills">Habilidades</Link> |{" "}
        <Link to="/contact">Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
