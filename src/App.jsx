import React, { useState } from 'react';
import {
  ArrowDown, ArrowUpRight, Mail, Menu, X, Code2,
  BrainCircuit, Database, Globe, Server, Layers, Sparkles, ExternalLink,
  GraduationCap, Send, Terminal, Workflow, Cpu
} from 'lucide-react';

const skills = [
  { title: 'Programming', icon: Code2, items: ['Python', 'JavaScript'] },
  { title: 'Web Development', icon: Globe, items: ['HTML', 'CSS', 'React.js'] },
  { title: 'Backend & APIs', icon: Server, items: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'Django', 'REST APIs'] },
  { title: 'Database & Data', icon: Database, items: ['MongoDB', 'MySQL', 'PostgreSQL', 'FAISS', 'Data Processing'] },
  { title: 'AI & Generative AI', icon: BrainCircuit, items: ['Machine Learning Fundamentals', 'Generative AI', 'LangChain', 'RAG', 'Prompt Engineering'] },
  { title: 'Core Concepts', icon: Layers, items: ['Data Structures & Algorithms', 'Problem Solving'] },
];

 const projects = [
  {
    number: '01',
    title: 'Smart AI',
    category: 'AI · Traffic Management',
    description: 'An intelligent traffic management system that analyzes traffic conditions, detects congestion hotspots and helps optimize routes.',
    tags: ['Python', 'AI', 'Traffic Analytics'],
    icon: Workflow,
    status: 'GitHub repository',
    link: 'https://github.com/keerthanatejaswi2-lgtm/SMART-AI',
  },
  {
    number: '02',
    title: 'Smart Ambulance Route Selection',
    category: 'AI · Healthcare',
    description: 'An intelligent emergency dispatch system that selects suitable ambulances and routes based on emergency severity, ambulance availability, distance and traffic.',
    tags: ['Python', 'Algorithms', 'Route Optimization'],
    icon: Cpu,
    status: 'GitHub repository',
    link: 'https://github.com/keerthanatejaswi2-lgtm/SMART-AMBULANCE-ROUTE-SELECTION',
  },
  {
    number: '03',
    title: 'Study Spark',
    category: 'Full-Stack Development',
    description: 'A MERN-stack study planner that helps students organize subjects, schedule study sessions, manage tasks and track study progress.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    icon: Terminal,
    status: 'GitHub repository',
    link: 'https://github.com/keerthanatejaswi2-lgtm/STUDY-SPARK',
  },
  {
    number: '04',
    title: 'Mental Wellness Tracker',
    category: 'Mental Health · Web Development',
    description: 'MindfulMood is a digital mental wellness tracker for recording daily moods, emotions and personal reflections.',
    tags: ['HTML', 'Web Development'],
    icon: BrainCircuit,
    status: 'GitHub repository',
    link: 'https://github.com/keerthanatejaswi2-lgtm/MANTAL-WELLNESS-TRACKER',
  },
  {
    number: '05',
    title: 'Weather Data Analysis',
    category: 'Data Science · Machine Learning',
    description: 'Uses historical weather data, Python and machine learning to analyze weather patterns and predict future conditions.',
    tags: ['Python', 'Data Science', 'Machine Learning'],
    icon: Database,
    status: 'GitHub repository',
    link: 'https://github.com/keerthanatejaswi2-lgtm/WEATHER-DATA-ANALYSIS',
  },
  {
    number: '06',
    title: 'Keerthana Tejaswi',
    category: 'Portfolio · TypeScript',
    description: 'A personal portfolio repository showcasing projects, skills and development work.',
    tags: ['TypeScript', 'Portfolio'],
    icon: Code2,
    status: 'GitHub repository',
    link: 'https://github.com/keerthanatejaswi2-lgtm/Keerthana-Tejaswi',
  },
];
const achievements = [
  'Hack With India × Devnovate – Hack With Hyderabad 3.0',
  'NEURAX Hackathon 3.0 (2026) – Round 1, CMR Technical Campus',
  'NEURAX Hackathon 3.0 (2026) – Round 2, CMR Technical Campus',
  'DEVERT-A-THON 2026 – Malla Reddy College of Engineering and Technology',
  'INFIN8 Project Expo 2026 – Malla Reddy Technical Campus',
  'Artificial Intelligence Internship – Codec Technologies Pvt. Ltd.',
];

const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Certificates', 'Contact'];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const goTo = (item) => {
    setActive(item);
    setMenuOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="navbar">
        <a className="brand" href="#home" onClick={() => setActive('Home')}>
          <span className="brand-mark">KT</span><span>keerthana<span className="brand-dot">.</span></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(item => (
            <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => goTo(item)}>{item}</button>
          ))}
          <a className="nav-resume" href="mailto:keerthanatejaswi2@gmail.com?subject=Resume%20Request">Let's talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Keerthana<br/><span>Tejaswi.</span></h1>
            <h2 className="hero-role">AI &amp; Full-Stack Developer <span className="role-line" /></h2>
            <p className="hero-description">
              I enjoy building thoughtful digital experiences and exploring how
              software, data and AI can solve real-world problems.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo('Projects')}>Explore my work <ArrowUpRight size={17}/></button>
              <button className="button button-ghost" onClick={() => goTo('Contact')}>Get in touch <Mail size={16}/></button>
            </div>
            <div className="social-row">
              <a href="https://github.com/keerthanatejaswi2-lgtm" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18}/></a>
              <a href="https://www.linkedin.com/in/keerthana-tejaswi-59405b398/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><ExternalLink size={18}/></a>
              <span className="social-caption">Find me online</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="profile-card">
              <div className="profile-top"><span className="window-dots"><i/><i/><i/></span><span>developer.profile</span><span className="card-live">●</span></div>
              <div className="avatar">KT</div>
              <h3>Keerthana Tejaswi</h3>
              <p className="profile-subtitle">Curious mind. Creative builder.</p>
              <div className="profile-divider" />
              <div className="code-line"><span>01</span><b>const</b> focus = <em>"AI + Development"</em>;</div>
              <div className="code-line"><span>02</span><b>const</b> mindset = <em>"Always learning"</em>;</div>
              <div className="code-line"><span>03</span><b>const</b> goal = <em>"Build with purpose"</em>;</div>
              <div className="profile-footer"><Sparkles size={14}/> Turning ideas into projects</div>
            </div>
            <div className="floating-chip chip-python"><span>⌘</span> Python</div>
            <div className="floating-chip chip-ai"><BrainCircuit size={16}/> Generative AI</div>
            <div className="floating-chip chip-react"><Code2 size={16}/> React.js</div>
          </div>
          <button className="scroll-cue" onClick={() => goTo('About')}><ArrowDown size={15}/> SCROLL TO EXPLORE</button>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Building today. Learning every day." description="A quick introduction to the person behind the projects." />
          <div className="about-grid">
            <div className="about-main glass-card">
              <div className="about-icon"><Sparkles size={22}/></div>
              <h3>Curiosity drives my code.</h3>
              <p>
                I'm a technology enthusiast interested in Artificial Intelligence,
                Generative AI and full-stack web development. I like learning how
                ideas move from a problem statement to a useful application.
              </p>
              <p>
                I enjoy exploring new tools, strengthening my problem-solving
                skills and collaborating on projects that have practical value.
              </p>
            </div>
            <div className="about-side">
              <div className="mini-card"><span className="mini-icon"><BrainCircuit/></span><div><b>AI &amp; GenAI</b><small>Exploring intelligent applications</small></div></div>
              <div className="mini-card"><span className="mini-icon"><Code2/></span><div><b>Development</b><small>Creating web-based solutions</small></div></div>
              <div className="mini-card"><span className="mini-icon"><GraduationCap/></span><div><b>Growth mindset</b><small>Learning through building</small></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="education">
          <SectionHeading eyebrow="MY JOURNEY" title="Education" description="The foundation I'm building as I grow in technology." />
          <div className="education-card glass-card">
            <div className="education-symbol"><GraduationCap size={27}/></div>
            <div className="education-details">
              <span className="project-category">UNDERGRADUATE</span>
              <h3>B.Tech — Artificial Intelligence &amp; Machine Learning</h3>
              <p>Malla Reddy Vishwavidyapeeth Technical Campus</p>
              <span className="education-year">2025–2029 · Expected graduation: 2029</span>
            </div>
            <span className="education-pill">Currently studying</span>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" description="A growing toolkit across programming, web development, backend systems and AI." />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return <article className="skill-card glass-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="skill-index">0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </article>;
            })}
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects & experiments" description="A few projects and concepts that reflect my interests in software, algorithms and practical problem-solving." />
          <div className="projects-grid">
            {projects.map(project => {
              const Icon = project.icon;
              return <article className="project-card glass-card" key={project.number}>
                <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-status">{project.status}</span></div>
                <div className="project-visual"><div className="project-orb"/><Icon size={44} strokeWidth={1.3}/><span className="visual-spark">✳</span></div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                <div className="project-bottom">
                  <span>View Project</span>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} GitHub repository`}><ArrowUpRight size={17}/></a>
                </div>
              </article>;
            })}
          </div>
        </section>


        <section className="section-wrap content-section" id="certificates">
          <SectionHeading
            eyebrow="MY ACHIEVEMENTS"
            title="Hackathons & Certifications"
            description="My hackathon participation, technical achievements and internship experience."
          />
          <div className="skills-grid">
            {achievements.map((item, index) => (
              <article className="skill-card glass-card" key={index}>
                <div className="skill-card-top">
                  <span className="skill-icon"><GraduationCap size={20}/></span>
                  <span className="skill-index">0{index + 1}</span>
                </div>
                <h3>{item}</h3>
                <span className="project-category">Achievement</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-decoration">✳</div>
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>Let's build something<br/><span>meaningful.</span></h2>
            <p>I'm always interested in learning, collaborating and connecting with people who love building things.</p>
            <a className="button button-primary" href="mailto:keerthanatejaswi2@gmail.com?">Say hello <Send size={16}/></a>
            <div className="contact-links">
              <a href="https://github.com/keerthanatejaswi2-lgtm" target="_blank" rel="noreferrer"><Code2 size={17}/> GitHub <ExternalLink size={12}/></a>
              <a href="https://www.linkedin.com/in/keerthana-tejaswi-59405b398/" target="_blank" rel="noreferrer"><ExternalLink size={17}/> LinkedIn <ExternalLink size={12}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">KT</span><span>keerthana<span className="brand-dot">.</span></span></a>
        <span>Designed &amp; built with curiosity.</span>
        <span>© {new Date().getFullYear()} Keerthana Tejaswi</span>
      </footer>
    </div>
  );
}

export default App;