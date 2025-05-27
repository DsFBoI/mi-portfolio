import { useEffect, useState } from 'react';
import '../index.css';


import img1 from '../assets/about/img1.jpg';
import img2 from '../assets/about/img2.jpg';
import img3 from '../assets/about/img3.jpg';
import img4 from '../assets/about/img4.jpg';
import img5 from '../assets/about/img5.jpg';
import img6 from '../assets/about/img6.jpg';
import img7 from '../assets/about/img7.jpg';
import img8 from '../assets/about/img8.jpg';
import img9 from '../assets/about/img9.jpg';
    


function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
  const sectionIds = ['intro', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);

    sectionIds.forEach((id) => {
    const el = document.getElementById(id);
        if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id); // 🔁 aquí se actualiza
    }
        }
    });
    

    // Animación fade-in
    const reveals = document.querySelectorAll('.reveal');
    for (let el of reveals) {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', onScroll);
  return () => window.removeEventListener('scroll', onScroll);
}, []);


  return (
    <div>
      

      <div className="main-container">
        {/* Presentación */}
        <section id="intro" className="section reveal">
          <h2>Daniel Sánchez Ferrari</h2>
          <p className="typewriter"> Computer Science Engineeer| AI Creative Developer  </p>

        </section>

        {/* Sobre mí */}
        <section id="about" className="section reveal about-section">
          <h2>Sobre mí</h2>
          <p>
           I'm an young Spanish engineer with a Computer Science Bachelor Degree at Universidad Politécnica de Madrid. I’m passionate about programming specially in everything related to AI and Machine Learning. Some of my other passions are football and videogames
          </p>

          <div className="carousel-wrapper">
            <div className="carousel-track">
              {[img1, img2, img3, img4, img5, img6,img7,img8,img9].map((img, i) => (
                <img src={img} alt={`slide-${i}`} className="carousel-img" key={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Educación */}
        <section id="education" className="section reveal">
          <h2>Educación</h2>
          <ul>
            <li><strong>Universidad Politécnica de Madrid</strong> — Degree inComputer Science (2020–2025)</li>
            <li><strong>Politecnico di Milano</strong> — Erasmus+ (2023–2024), Total average: 21.3/30</li>
            <li><strong>IES Ramiro de Maeztu</strong> — Tecnological Sciences modality</li>
          </ul>
        </section>

        {/* Experiencia */}
        <section id="experience" className="section reveal">
          <h2>Experiencia</h2>
          <ul>
            <li><strong>Accenture (Sept 2024 – May 2025)</strong> — Software Engineering Intern</li>
            <li><strong>Zabbit</strong> — Prácticas en IA y cadena de suministro, modelo de control de calidad en Python</li>
          </ul>
        </section>

        {/* Proyectos */}
        <section id="projects" className="section reveal">
          <h2>Proyectos</h2>
          <ul>
            <li><strong>Athens Interactive Metro Map</strong> — Python</li>
            <li><strong>Sokoban Game</strong> — Java</li>
            <li><strong>Compilador JavaScript</strong> — Java</li>
            <li><strong>Trabajo Fin de Grado</strong> — Python</li>
            <li><a href="https://github.com/DsFBoI/UPM-Work" target="_blank">GitHub</a></li>
          </ul>
        </section>

        {/* Habilidades */}
        <section id="skills" className="section reveal">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li>Java, Python (Avanzado)</li>
            <li>C++, C#, Ensamblador (Intermedio)</li>
            <li>SQL, Git, Office IT</li>
          </ul>
          <h3>Soft Skills</h3>
          <ul>
            <li>Trabajo en equipo, liderazgo, iniciativa</li>
            <li>Resolución de problemas, adaptabilidad, creatividad</li>
          </ul>
        </section>

        {/* Contacto */}
        <section id="contact" className="section reveal">
          <h2>Contacto</h2>
          <p>
            📧 <a href="mailto:danelsf02@gmail.com">danelsf02@gmail.com</a><br />
            📞 +34 663 54 34 76<br />
            🌐 <a href="https://github.com/DsFBoI" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/danielsferrari" target="_blank">LinkedIn</a><br />
            📍 Calle García de Paredes, 66, 4A
          </p>
        </section>
    </div>
    <div className="scroll-spy-vertical">
        <div className="progress-line" style={{ height: `${scrollProgress}%` }} />
        {['intro', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map((id) => (
            <div
                key={id}
                className={`spy-item ${activeSection === id ? 'active' : ''}`}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                <div className="spy-dot" />
                <span className="spy-label">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
            </div>
            ))}
        </div>


    </div>
  );
}

export default Home;
