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
import upm from '../assets/about/upm.png';
import polimi from '../assets/about/polimi.png';
    


function Home() {
  const [activeSection, setActiveSection] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // Detect active section based on middle of viewport
      const sections = ['intro', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const viewportMiddle = window.innerHeight / 2;
      
      let currentSection = 'intro';
      let currentSectionIndex = 0;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the middle of viewport
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            currentSection = sectionId;
            currentSectionIndex = index;
          }
        }
      });
      
      setActiveSection(currentSection);

      // Calculate progress based on current section position
      const totalSections = sections.length;
      const progressPerSection = 100 / totalSections;
      
      // Find more precise progress within current section
      const currentElement = document.getElementById(currentSection);
      if (currentElement) {
        const rect = currentElement.getBoundingClientRect();
        const sectionProgress = Math.max(0, Math.min(1, (viewportMiddle - rect.top) / rect.height));
        const progress = (currentSectionIndex * progressPerSection) + (sectionProgress * progressPerSection);
        setScrollProgress(Math.min(100, progress));
      }

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
    onScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div>
      

      <div className="main-container">
        {/* Presentación */}
        <section id="intro" className="section reveal">
          <h2 className="reveal">Daniel Sánchez Ferrari</h2>
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
          <ul className="education-list">
            <li className="education-item">
              <div 
                className="edu-column"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  gap: '8px'
                }}
              >
                <img 
                  src={upm} 
                  alt="UPM Logo" 
                  style={{ width: '70px', height: 'auto' }} 
                />
                <span>
                  <strong>Politécnica de Madrid University</strong> — Degree in Computer Science (2020–2025)
                </span>
              </div>
            </li>
              
            <li className="education-item">
              <div 
                className="edu-column"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  gap: '8px'
                }}
              >
                <img 
                  src={polimi} 
                  alt="Polimi Logo" 
                  style={{ width: '70px', height: 'auto' }} 
                />
                <span>
                  <strong>Politecnico di Milano University</strong> — Erasmus+ (2023–2024), Total average: 21.3/30
                </span>
              </div>
            </li>
              
                        
          </ul>
        </section>


        {/* Working Experience */}
        <section id="experience" className="section reveal">
          <h2>Working Experience</h2>
          <ul>
            <li><strong>Accenture (Sept 2024 – May 2025)</strong> — Supply Chain Analyst Intern</li>
            <li><strong>Accenture (OCt 2025 – Currently)</strong> — Ind & Func AI Decision Science Analyst </li>
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
                  <span className="tech-tag">Cybersecurity</span>
                  <span className="tech-tag">Image Manipulation</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/documents" target="_blank" className="project-link">
                  GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Vision AI Tool</h3>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Computer Vision</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/VisionAI" target="_blank" className="project-link">
                  GitHub
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
              <div className="project-links">
                <a href="https://github.com/DsFBoI/UPM-Work/tree/main/PDL" target="_blank" className="project-link">
                  GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Athens Interactive Metro Map</h3>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Algorithms</span>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/DsFBoI/UPM-Work/tree/main/IA/Practica_2k22" target="_blank" className="project-link">
                  GitHub
                </a>
              </div>
            </div>

            <div className="projects-footer">
              <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" className="view-all-btn">
                View All Projects on GitHub
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
            📍 Madrid
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
