
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">MyPortfolio.</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-text">
          <p className="welcome">HELLO, WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm <span>Hemalatha.S</span></h1>
          <h2>BCA Student & Aspiring Developer</h2>
          <p>
            I am learning web development and building creative
            projects using HTML, CSS, JavaScript and React.
          </p>
          <a className="main-button" href="#projects">View My Projects</a>
        </div>
        <div className="hero-circle">H</div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
  I am Hemalatha .S, a BCA student at RR Institute of
  Management Studies. I am interested in web development
  and learning new technologies. My goal is to become a
  skilled Web Developer and build useful websites.
</p>
<p className="college-name">
  RR Institute of Management Studies | BCA
</p>
        
         
      </section>

      <section id="skills" className="section skills-section">
        <h2>My Skills</h2>
        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Python</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="project-card">
          <h3>Student Expense Tracker</h3>
          <p>
           A simple application to record student expenses,
  track spending, and manage a daily budget.

          </p>
          <span>React • CSS • JavaScript</span>
        </div>
        <div className="project-card">
          <h3>Voice-to-Text Converter</h3>
          <p>
            A browser-based application that converts speech
            into text using speech recognition.
          </p>
          <span>HTML • CSS • JavaScript</span>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>I'm happy to connect and learn about new opportunities.</p>
        <a href="mailto:hema11seervi@gmail.com" className="main-button">
          Email Me
        </a>
        <div className="social-links">
          <a href="https://github.com/hema11seervi-dotcom"
             target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/hemalatha-s-386590335/"
             target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Hemalatha | Personal Portfolio</p>
      </footer>
    </div>
  )
}

export default App
