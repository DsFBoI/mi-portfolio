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
          <p className="typewriter">Computer Science Engineer | AI Creative Developer</p>
          <p className="typewriter-mobile typewriter-line1">Computer Science Engineer</p>
          <p className="typewriter-mobile typewriter-line2">AI Creative Developer</p>

        </section>

        {/*About me*/}
        <section id="about" className="section reveal about-section">
          <h2>About me</h2>
          <p>
           I'm an young Spanish engineer with a Computer Science Bachelor Degree at Universidad Politécnica de Madrid. I’m passionate about programming specially in everything related to AI and Machine Learning. Some of my other passions are travelling, football and music to name a few.
          </p>

          <div className="carousel-wrapper">
            <div className="carousel-track">
              {[img1, img2, img3, img4, img5, img6,img7,img8,img9].map((img, i) => (
                <img src={img} alt={`slide-${i}`} className="carousel-img" key={i} />
              ))}
              {[img1, img2, img3, img4, img5, img6,img7,img8,img9].map((img, i) => (
                <img src={img} alt={`slide-${i}-duplicate`} className="carousel-img" key={`duplicate-${i}`} />
              ))}
            </div>
          </div>
        </section>
        {/* Education */}
        <section id="education" className="section reveal">
          <h2>Education</h2>
          <ul>
            <li><strong> Politécnica de Madrid University</strong> — Degree in Computer Science (2020–2025)</li>
            <li><strong>Politecnico di Milano University</strong> — Erasmus+ (2023–2024), Total average: 21.3/30</li>
            <li><strong>IES Ramiro de Maeztu</strong> — Tecnological Sciences modality</li>
          </ul>
        </section>

        {/* Working Experience */}
        <section id="experience" className="section reveal">
          <h2>Working Experience</h2>
          <ul>
            <li><strong>Accenture (Sept 2024 – May 2025)</strong> — Supply Chain Analyst Intern</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          
          <div className="projects-container">
            <div className="project-card">
              <div className="project-header">
                <h3>Final Degree Project: Steganography Algorithm</h3>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">Image Processing</span>
                </div>
              </div>
              <p className="project-description">
                Advanced steganography algorithm for hiding data within digital images using machine learning techniques. 
                Implements state-of-the-art concealment methods with minimal visual distortion.
              </p>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" className="project-link">
                  <span>🔗</span> GitHub
                </a>
                <a href="#" className="project-link demo-link">
                  <span>📄</span> Documentation
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Vision AI Tool</h3>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Computer Vision</span>
                  <span className="tech-tag">OpenCV</span>
                </div>
              </div>
              <p className="project-description">
                Computer vision application for real-time object detection and analysis. 
                Features custom neural network models and advanced image processing capabilities.
              </p>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" className="project-link">
                  <span>🔗</span> GitHub
                </a>
                <a href="#" className="project-link demo-link">
                  <span>🎥</span> Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>JavaScript Compiler</h3>
                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Compiler Design</span>
                  <span className="tech-tag">Parsing</span>
                </div>
              </div>
              <p className="project-description">
                Full-featured JavaScript compiler built from scratch in Java. Includes lexical analysis, 
                syntax parsing, semantic analysis, and code generation phases.
              </p>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" className="project-link">
                  <span>🔗</span> GitHub
                </a>
                <a href="#" className="project-link demo-link">
                  <span>📚</span> Documentation
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Athens Interactive Metro Map</h3>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Data Structures</span>
                  <span className="tech-tag">Algorithms</span>
                </div>
              </div>
              <p className="project-description">
                Interactive metro map application with pathfinding algorithms and real-time route optimization. 
                Features shortest path calculation and station information system.
              </p>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" className="project-link">
                  <span>🔗</span> GitHub
                </a>
                <a href="#" className="project-link demo-link">
                  <span>🗺️</span> Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Sokoban Game</h3>
                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Game Development</span>
                  <span className="tech-tag">GUI</span>
                </div>
              </div>
              <p className="project-description">
                Classic Sokoban puzzle game implementation with multiple levels, undo functionality, 
                and modern GUI. Features level editor and save/load game state.
              </p>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" className="project-link">
                  <span>🔗</span> GitHub
                </a>
                <a href="#" className="project-link demo-link">
                  <span>🎮</span> Play Game
                </a>
              </div>
            </div>

            <div className="projects-footer">
              <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" className="view-all-btn">
                <span>👨‍💻</span> View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section reveal">
          <h2>Skills</h2>
          
          <div className="skills-container">
            <div className="skills-category">
              <h3>Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="90"></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Java</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="90"></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">C++</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="75"></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">C#</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="70"></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Assembly</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="65"></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">SQL</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="80"></div>
                  </div>
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Technologies & Tools</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">Git</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="85"></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">AI/ML</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="80"></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Office IT</span>
                  <div className="skill-bar">
                    <div className="skill-progress" data-level="85"></div>
                  </div>
                  <span className="skill-level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="soft-skills-grid">
                <div className="soft-skill-item">
                  <div className="soft-skill-icon">🎯</div>
                  <span>Problem Solving</span>
                </div>
                <div className="soft-skill-item">
                  <div className="soft-skill-icon">👥</div>
                  <span>Teamwork</span>
                </div>
                <div className="soft-skill-item">
                  <div className="soft-skill-icon">🚀</div>
                  <span>Leadership</span>
                </div>
                <div className="soft-skill-item">
                  <div className="soft-skill-icon">💡</div>
                  <span>Initiative</span>
                </div>
                <div className="soft-skill-item">
                  <div className="soft-skill-icon">🔄</div>
                  <span>Adaptability</span>
                </div>
                <div className="soft-skill-item">
                  <div className="soft-skill-icon">🎨</div>
                  <span>Creativity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section reveal">
          <h2>Contact</h2>
          <p>
            📧 <a href="mailto:danelsf02@gmail.com">danelsf02@gmail.com</a><br />
            📞 +34 663 54 34 76<br />
            🌐 <a href="https://github.com/DsFBoI" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/danielsferrari" target="_blank">LinkedIn</a><br />
            📍 Calle García de Paredes, Madrid, 28010
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
