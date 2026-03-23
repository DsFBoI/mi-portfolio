import { useEffect, useState, useRef } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollPositionRef = useRef(0);
  const [marks, setMarks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);
  const introSectionRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const sections = ['intro', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const viewportMiddle = window.innerHeight / 2;

      let currentSection = 'intro';
      let currentSectionIndex = 0;

      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            currentSection = sectionId;
            currentSectionIndex = index;
          }
        }
      });

      setActiveSection(currentSection);

      const totalSections = sections.length;
      const progressPerSection = 100 / totalSections;
      const currentElement = document.getElementById(currentSection);
      if (currentElement) {
        const rect = currentElement.getBoundingClientRect();
        const sectionProgress = Math.max(0, Math.min(1, (viewportMiddle - rect.top) / rect.height));
        const progress = (currentSectionIndex * progressPerSection) + (sectionProgress * progressPerSection);
        setScrollProgress(Math.min(100, progress));
      }

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
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPositionRef.current);
    }

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollPositionRef.current) {
        window.scrollTo(0, scrollPositionRef.current);
      }
    };
  }, [selectedImage]);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const handleIntroClick = (e) => {
    if (e.target.closest('.intro-mark') || e.target.closest('.text-input-container')) return;

    const introSection = introSectionRef.current;
    if (!introSection) return;

    const rect = introSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClickPosition({ x, y });
    setShowInput(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !clickPosition) return;

    const newMark = {
      id: Date.now(),
      x: clickPosition.x,
      y: clickPosition.y,
      text: inputText.trim(),
      rotation: (Math.random() - 0.5) * 10,
    };

    setMarks(prev => [...prev, newMark]);
    setInputText('');
    setShowInput(false);
    setClickPosition(null);
  };

  const handleCancel = () => {
    setInputText('');
    setShowInput(false);
    setClickPosition(null);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#intro" className="nav-logo">DSF</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="main-container">

        {/* HERO */}
        <section
          id="intro"
          className="section reveal intro-clickable"
          ref={introSectionRef}
          onClick={handleIntroClick}
          style={{ position: 'relative', cursor: 'crosshair' }}
        >
          <span className="section-label">Portfolio</span>
          <h1 className="hero-name reveal">Daniel<br />Sánchez<br />Ferrari</h1>
          <p className="typewriter">Computer Science Engineer · AI Creative Developer</p>
          <p className="typewriter-mobile typewriter-line1">Computer Science Engineer</p>
          <p className="typewriter-mobile typewriter-line2">AI Creative Developer</p>

          {marks.map((mark) => (
            <div
              key={mark.id}
              className={`intro-mark ${mark.text ? 'intro-mark-text' : `mark-style-${mark.style}`}`}
              style={{
                position: 'absolute',
                left: `${mark.x}px`,
                top: `${mark.y}px`,
                transform: `translate(-50%, -50%) rotate(${mark.rotation}deg)`,
              }}
            >
              {mark.text ? (
                <span className="intro-mark-text-content">{mark.text}</span>
              ) : (
                <svg width="60" height="60" viewBox="0 0 60 60">
                  {mark.style === 0 && (
                    <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
                  )}
                  {mark.style === 1 && (
                    <path d="M30 5 L35 20 L50 20 L38 30 L43 45 L30 35 L17 45 L22 30 L10 20 L25 20 Z" fill="currentColor" opacity="0.6"/>
                  )}
                  {mark.style === 2 && (
                    <rect x="10" y="10" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" rx="5"/>
                  )}
                </svg>
              )}
            </div>
          ))}

          {showInput && clickPosition && (
            <div
              className="text-input-container"
              style={{
                position: 'absolute',
                left: `${clickPosition.x}px`,
                top: `${clickPosition.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleTextSubmit} className="text-input-form">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a word..."
                  className="text-input"
                  maxLength={20}
                  autoFocus
                  onBlur={() => {
                    setTimeout(() => {
                      if (!inputText.trim()) handleCancel();
                    }, 200);
                  }}
                />
                <button type="submit" className="text-submit-btn">Add</button>
                <button type="button" className="text-cancel-btn" onClick={handleCancel}>×</button>
              </form>
            </div>
          )}

          <p className="intro-hint">Click anywhere to leave a mark</p>
        </section>

        {/* ABOUT */}
        <section id="about" className="section reveal about-section">
          <span className="section-label">01 — About</span>
          <h2>About me</h2>
          <p>
            I'm a young Spanish engineer with a Computer Science degree from Universidad Politécnica de Madrid.
            Passionate about programming — especially everything related to AI and Machine Learning.
            When not coding, you'll find me travelling, playing football, or listening to music.
          </p>

          <div className="carousel-wrapper">
            <div className="carousel-track">
              {images.map((img, i) => (
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="carousel-img"
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
              {images.map((img, i) => (
                <img
                  src={img}
                  alt={`slide-${i}-duplicate`}
                  className="carousel-img"
                  key={`duplicate-${i}`}
                  onClick={() => setSelectedImage(img)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section reveal">
          <span className="section-label">02 — Education</span>
          <h2>Education</h2>
          <ul className="education-list">
            <li className="education-item">
              <div className="edu-column">
                <img src={upm} alt="UPM Logo" className="edu-logo" />
                <span>
                  <strong>Politécnica de Madrid University</strong><br />
                  Degree in Computer Science — 2020–2025
                </span>
              </div>
            </li>
            <li className="education-item">
              <div className="edu-column">
                <img src={polimi} alt="Polimi Logo" className="edu-logo" />
                <span>
                  <strong>Politecnico di Milano University</strong><br />
                  Erasmus+ — 2023–2024 · Average: 21.3/30
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section reveal">
          <span className="section-label">03 — Experience</span>
          <h2>Experience</h2>
          <ul className="experience-list">
            <li className="experience-item">
              <div>
                <div className="exp-company">Accenture</div>
                <div className="exp-role">Supply Chain Analyst Intern</div>
              </div>
              <span className="exp-date">Sept 2024 – May 2025</span>
            </li>
            <li className="experience-item">
              <div>
                <div className="exp-company">Accenture</div>
                <div className="exp-role">Ind & Func AI Decision Science Analyst</div>
              </div>
              <span className="exp-date">Oct 2025 – Present</span>
            </li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section reveal">
          <span className="section-label">04 — Projects</span>
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
                <a href="https://github.com/DsFBoI/documents" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
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
                <a href="https://github.com/DsFBoI/VisionAI" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
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
                <a href="https://github.com/DsFBoI/UPM-Work/tree/main/PDL" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
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
                <a href="https://github.com/DsFBoI/UPM-Work/tree/main/IA/Practica_2k22" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
              </div>
            </div>

            <div className="projects-footer">
              <a href="https://github.com/DsFBoI/UPM-Work" target="_blank" rel="noopener noreferrer" className="view-all-btn">
                View All on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section reveal">
          <span className="section-label">05 — Skills</span>
          <h2>Skills</h2>

          <div className="skills-container">
            <div className="skills-category">
              <h3>Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-item"><span className="skill-name">Python</span><div className="skill-bar"><div className="skill-progress" data-level="90"></div></div><span className="skill-level">Advanced</span></div>
                <div className="skill-item"><span className="skill-name">Java</span><div className="skill-bar"><div className="skill-progress" data-level="90"></div></div><span className="skill-level">Advanced</span></div>
                <div className="skill-item"><span className="skill-name">C++</span><div className="skill-bar"><div className="skill-progress" data-level="75"></div></div><span className="skill-level">Intermediate</span></div>
                <div className="skill-item"><span className="skill-name">C#</span><div className="skill-bar"><div className="skill-progress" data-level="70"></div></div><span className="skill-level">Intermediate</span></div>
                <div className="skill-item"><span className="skill-name">Assembly</span><div className="skill-bar"><div className="skill-progress" data-level="65"></div></div><span className="skill-level">Intermediate</span></div>
                <div className="skill-item"><span className="skill-name">SQL</span><div className="skill-bar"><div className="skill-progress" data-level="80"></div></div><span className="skill-level">Intermediate</span></div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Technologies & Tools</h3>
              <div className="skills-grid">
                <div className="skill-item"><span className="skill-name">Git</span><div className="skill-bar"><div className="skill-progress" data-level="85"></div></div><span className="skill-level">Advanced</span></div>
                <div className="skill-item"><span className="skill-name">AI / ML</span><div className="skill-bar"><div className="skill-progress" data-level="80"></div></div><span className="skill-level">Advanced</span></div>
                <div className="skill-item"><span className="skill-name">Office IT</span><div className="skill-bar"><div className="skill-progress" data-level="85"></div></div><span className="skill-level">Advanced</span></div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="soft-skills-grid">
                <div className="soft-skill-item"><div className="soft-skill-icon">🎯</div><span>Problem Solving</span></div>
                <div className="soft-skill-item"><div className="soft-skill-icon">👥</div><span>Teamwork</span></div>
                <div className="soft-skill-item"><div className="soft-skill-icon">🚀</div><span>Leadership</span></div>
                <div className="soft-skill-item"><div className="soft-skill-icon">💡</div><span>Initiative</span></div>
                <div className="soft-skill-item"><div className="soft-skill-icon">🔄</div><span>Adaptability</span></div>
                <div className="soft-skill-item"><div className="soft-skill-icon">🎨</div><span>Creativity</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section reveal">
          <span className="section-label">06 — Contact</span>
          <h2>Contact</h2>
          <p>
            <a href="mailto:danelsf02@gmail.com">danelsf02@gmail.com</a><br />
            +34 663 54 34 76<br />
            <a href="https://github.com/DsFBoI" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' · '}
            <a href="https://linkedin.com/in/danielsferrari" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
            Madrid, Spain
          </p>
        </section>

      </div>

      {/* SCROLL SPY */}
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

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button
            className="modal-close-btn"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Close image"
          >
            Close
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}

export default Home;
