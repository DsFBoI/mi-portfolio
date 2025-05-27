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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div>
    <div className="main-container">
      <div>
      {/* Barra de progreso */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '4px',
          backgroundColor: '#4A90E2',
          zIndex: 9999,
          transition: 'width 0.25s'
        }}
      />

      {/* Menú */}
      <nav className="navbar">
        <button onClick={() => scrollTo('about')}>Sobre mí</button>
        <button onClick={() => scrollTo('projects')}>Proyectos</button>
        <button onClick={() => scrollTo('skills')}>Habilidades</button>
        <button onClick={() => scrollTo('contact')}>Contacto</button>
      </nav>

      {/* Secciones */}
    <section id="about" className="section reveal">
  <h2>Sobre mí</h2>
  <p>
    Soy un desarrollador web apasionado por interfaces limpias. Me gusta explorar ideas visuales, trabajar en equipo y mantener el código organizado.
  </p>

  {/* Fondo decorativo con imágenes desenfocadas */}
  <div className="about-background" />

  {/* Carrusel visible */}
  <div className="carousel-wrapper">
    <div className="carousel-track">
      {[img1, img2, img3, img4, img5, img6,img7, img8, img9].map((img, index) => (
        <img src={img} alt={`slide-${index}`} className="carousel-img" key={index} />
      ))}
    </div>
  </div>
</section>


      <section id="projects" className="section reveal">
        <h2>Proyectos</h2>
        <p>
          Aquí encontrarás una selección de mis trabajos: aplicaciones web, landing pages y experimentos interactivos.
        </p>
      </section>

      <section id="skills" className="section reveal">
        <h2>Habilidades</h2>
        <ul>
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section id="contact" className="section reveal">
        <h2>Contacto</h2>
        <p>
          📧 <a href="mailto:danel@example.com">danel@example.com</a><br />
          🔗 <a href="https://github.com/tuusuario" target="_blank">GitHub</a> | 
          <a href="https://linkedin.com/in/tuusuario" target="_blank"> LinkedIn</a>
        </p>
      </section>
    </div>
    </div>
  </div>
);

}

export default Home;
