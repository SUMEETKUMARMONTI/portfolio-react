import React from "react";
import "./App.css";

const App = () => {
  const handleCardTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = ((15 * y) / (rect.height / 2)) * -1;
    const rotateY = (15 * x) / (rect.width / 2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px)`;
  };

  const resetCardTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="nav">
        <a className="nav-left" href="#hero">
          <span className="logo-3d">SM</span>
          <span className="nav-name">Sumeet Kumar Monti</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a
            className="resume-btn small"
            href="/resume.pdf"
            download="Sumeet_Kumar_Monti_Resume.pdf"
          >
            Download CV
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <div
          className="hero-card tilt-card"
          onMouseMove={handleCardTilt}
          onMouseLeave={resetCardTilt}
        >
          <div className="hero-inner">
            <div className="hero-left">
              <p className="hello">नमस्ते 👋, I'm</p>
              <h1 className="hero-name">Sumeet Kumar Monti</h1>
              <h2 className="hero-role">
                Full-Stack Developer & Problem Solver
              </h2>
              <p className="hero-summary">
                CSE student with strong DSA foundations (250+ LeetCode problems)
                and hands-on MERN experience. I love building scalable systems,
                AI-based tools and real-time apps that actually solve problems.
              </p>
              <div className="hero-actions">
                <a className="primary-btn" href="#projects">
                  View Projects
                </a>
                <a
                  className="secondary-btn"
                  href="/resume.pdf"
                  download="Sumeet_Kumar_Monti_Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
              <div className="hero-links">
                <a
                  href="mailto:sumeetkrm07@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  📧 Email
                </a>
                <a
                  href="https://www.linkedin.com/in/sumeetkumarmonti932003"
                  target="_blank"
                  rel="noreferrer"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/SUMEET_KR_MONTI/"
                  target="_blank"
                  rel="noreferrer"
                >
                  🧠 LeetCode
                </a>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-photo-frame">
                <div className="photo-orbit"></div>
                <img
                  src="/images/profile.png"
                  alt="Sumeet profile"
                  className="hero-photo"
                />
              </div>
              <div className="hero-badges">
                <div className="badge badge-3d">
                  <span>250+</span>
                  <p>LeetCode Problems</p>
                </div>
                <div className="badge badge-3d">
                  <span>MERN</span>
                  <p>Full-Stack Dev</p>
                </div>
                <div className="badge badge-3d">
                  <span>AI</span>
                  <p>Speech & Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="title-line" />
        </div>
        <div
          className="about-grid tilt-card"
          onMouseMove={handleCardTilt}
          onMouseLeave={resetCardTilt}
        >
          <div className="about-text">
            <p>
              I’m a Computer Science Engineering student at Chandigarh
              University, passionate about{" "}
              <strong>high-performance applications</strong>,{" "}
              <strong>AI-driven solutions</strong>, and{" "}
              <strong>clean, maintainable code</strong>. I enjoy converting
              complex problems into simple, elegant code structures.
            </p>
            <p>
              My experience ranges from{" "}
              <strong>AI & Python automation</strong> to{" "}
              <strong>Ethereum blockchain</strong> development and{" "}
              <strong>real-time speech therapy tools</strong>. I’m actively
              improving my DSA, system design thinking, and full-stack skills to
              become a strong Software Development Engineer.
            </p>
          </div>
          <div className="about-cards">
            <div className="mini-card">
              <h3>Current Focus</h3>
              <p>
                DSA + MERN stack + Cloud fundamentals, preparing for SDE
                opportunities.
              </p>
            </div>
            <div className="mini-card">
              <h3>Strengths</h3>
              <p>
                Debugging, optimization, ownership, and fast learning with real
                projects.
              </p>
            </div>
            <div className="mini-card">
              <h3>Location</h3>
              <p>Mohali, Punjab, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <div className="title-line" />
        </div>
        <div className="skills-3d-wrapper">
          <div className="skills-ring">
            <div className="skill-chip">C</div>
            <div className="skill-chip">C++</div>
            <div className="skill-chip">Python</div>
            <div className="skill-chip">SQL</div>
            <div className="skill-chip">HTML</div>
            <div className="skill-chip">CSS</div>
            <div className="skill-chip">JavaScript</div>
            <div className="skill-chip">React</div>
            <div className="skill-chip">MongoDB</div>
            <div className="skill-chip">MySQL</div>
            <div className="skill-chip">Git &amp; GitHub</div>
            <div className="skill-chip">DSA</div>
          </div>
        </div>
        <div className="skills-grid">
          <div
            className="skills-card tilt-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <h3>Programming &amp; DSA</h3>
            <p>
              Strong in DSA with 250+ LeetCode problems, focusing on arrays,
              strings, DP, graphs and problem solving patterns.
            </p>
          </div>
          <div
            className="skills-card tilt-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <h3>Web &amp; Databases</h3>
            <p>
              Building responsive front-ends with React and managing data using
              MySQL, Oracle and MongoDB.
            </p>
          </div>
          <div
            className="skills-card tilt-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <h3>Tools &amp; Soft Skills</h3>
            <p>
              VS Code, Git, Google Colab, MS Office with strong teamwork,
              leadership, communication and project management skills.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="title-line" />
        </div>
        <div className="projects-grid">
          {/* AI Speech Project – opens Colab */}
          <article
            className="project-card tilt-card clickable-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
            onClick={() =>
              window.open(
                "https://colab.research.google.com/drive/1c0GW-NIvVS8XcHuNalMS0VMvfhxtrN6i#scrollTo=IhohRUCtkq0x",
                "_blank"
              )
            }
          >
            <div className="project-image-wrapper">
              <img
                src="/images/project-speech.png"
                alt="AI Speech Therapy"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>AI Based Speech Impairment Therapy</h3>
              <p className="project-tech">
                Python · Pandas · Gradio · Real-time Speech Processing
              </p>
              <p>
                Built an AI-based speech therapy tool with real-time
                speech-to-text, pronunciation analysis, adaptive feedback and a
                medical symptom checker to help speech-impaired users practice
                effectively.
              </p>
              <ul className="project-points">
                <li>Real-time audio processing pipeline.</li>
                <li>Automated analysis &amp; personalized feedback.</li>
                <li>Simple UI for patients and doctors.</li>
              </ul>
            </div>
          </article>

          {/* Weather Project – change URL to your GitHub/live link */}
          <article
            className="project-card tilt-card clickable-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
            onClick={() =>
              window.open(
                "https://github.com/your-username/weather-app",
                "_blank"
              )
            }
          >
            <div className="project-image-wrapper">
              <img
                src="/images/project-weather.png"
                alt="Weather App"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Weather Website</h3>
              <p className="project-tech">
                HTML · CSS · JavaScript · OpenWeather API
              </p>
              <p>
                Developed a weather web app that fetches live weather data and
                shows temperature, humidity, wind speed and conditions with a
                clean, responsive interface.
              </p>
              <ul className="project-points">
                <li>API integration with error handling.</li>
                <li>Location-wise weather search.</li>
                <li>Responsive layout for mobile &amp; desktop.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE & CERTS */}
      <section id="experience" className="section">
        <div className="section-title">
          <h2>Experience &amp; Certifications</h2>
          <div className="title-line" />
        </div>
        <div className="timeline-3d">
          <div className="timeline-line" />
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div
                className="timeline-card tilt-card"
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <h3>AI &amp; Python Trainee</h3>
                <p className="timeline-tag">Summer Training · May–Jul 2024</p>
                <p>
                  Learned Python, AI fundamentals, data preprocessing and ML
                  model implementation. Built mini AI/automation projects and
                  improved understanding of data pipelines.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div
                className="timeline-card tilt-card"
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <h3>Blockchain Developer Trainee (Ethereum)</h3>
                <p className="timeline-tag">Jun–Jul 2023</p>
                <p>
                  Trained on Ethereum basics, Solidity, smart contracts and dApp
                  deployment, understanding how to build secure and transparent
                  systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div
                className="timeline-card tilt-card"
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <h3>Certifications</h3>
                <ul className="project-points">
                  <li>
                    IOT: Design Concepts &amp; Use Cases (NPTEL Elite) – NITTTR
                    Chandigarh, 2025
                  </li>
                  <li>
                    Foundation of Cloud Edge ML (NPTEL Elite) – IIT Kanpur, 2025
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div
                className="timeline-card tilt-card"
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <h3>Research Publications</h3>
                <ul className="project-points">
                  <li>Blockchain for Secured Transaction – IJSREM (2025)</li>
                  <li>
                    AI Based Speech Impairment Therapy – IGCAI Conference (2025)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-title">
          <h2>Education</h2>
          <div className="title-line" />
        </div>
        <div className="edu-grid">
          <div
            className="edu-card tilt-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <h3>B.E. – Computer Science &amp; Engineering</h3>
            <p className="timeline-tag">
              Chandigarh University · Aug 2022 – Present
            </p>
            <p>SGPA: 8.48 (6th Semester)</p>
          </div>
          <div
            className="edu-card tilt-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <h3>Intermediate (CBSE)</h3>
            <p className="timeline-tag">
              New Horizon School, Bhagalpur · 84.4%
            </p>
          </div>
          <div
            className="edu-card tilt-card"
            onMouseMove={handleCardTilt}
            onMouseLeave={resetCardTilt}
          >
            <h3>10th (CBSE)</h3>
            <p className="timeline-tag">
              GRSS Vidya Mandir, Bhagalpur · 89%(IN "Foundation of IT" Subject)
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section last-section">
        <div className="section-title">
          <h2>Contact</h2>
          <div className="title-line" />
        </div>
        <div
          className="contact-card tilt-card"
          onMouseMove={handleCardTilt}
          onMouseLeave={resetCardTilt}
        >
          <p>
            I’m actively looking for{" "}
            <strong>Software Engineering / SDE</strong> roles and exciting
            internships.
          </p>
          <p>Let’s build something impactful together.</p>
          <div className="contact-grid">
            <div>
              <h4>Email</h4>
              <a href="mailto:sumeetkrm07@gmail.com">sumeetkrm07@gmail.com</a>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91-8825153510</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>Mohali, Punjab, India</p>
            </div>
            <div>
              <h4>Profiles</h4>
              <a
                href="https://www.linkedin.com/in/sumeetkumarmonti932003"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href="https://leetcode.com/u/SUMEET_KR_MONTI/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Sumeet Kumar Monti · Built with React
        </p>
      </footer>
    </div>
  );
};

export default App;
