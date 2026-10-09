import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Activity, BrainCircuit, BriefcaseBusiness, Check, Code2, Database, Github, GraduationCap, Linkedin, Mail, Menu, ScanText, Send, Sparkles, X, ChartNoAxesCombined } from 'lucide-react';
import { sampleProjects } from './data.js';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'JavaScript'] },
  { title: 'AI & Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy', 'Model Evaluation'] },
  { title: 'Web Development', items: ['HTML', 'CSS', 'React', 'Node.js'] },
  { title: 'Database & Tools', items: ['MySQL', 'MongoDB', 'Git', 'GitHub'] }
];
const iconMap = { activity: Activity, chart: ChartNoAxesCombined, scan: ScanText };

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

export default function App() {
  const [projects, setProjects] = useState(sampleProjects);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState({ type: '', text: '' });
  const [apiConnected, setApiConnected] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => { if (!res.ok) throw new Error('API unavailable'); return res.json(); })
      .then((data) => { if (Array.isArray(data) && data.length) setProjects(data); setApiConnected(true); })
      .catch(() => setApiConnected(false));
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  async function submitContact(event) {
    event.preventDefault(); setSending(true); setNotice({ type: '', text: '' });
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Could not send message.');
      setNotice({ type: 'success', text: 'Thanks! Your message reached the portfolio API.' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setNotice({ type: 'error', text: 'The API is not reachable yet. Start the backend, then try again.' });
    } finally { setSending(false); }
  }

  return <>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">R<span>.</span></span><span>Rithish<span className="brand-muted">.dev</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
          <p className="hero-pretitle">Hello, I'm</p>
          <h1>Rithish <span className="gradient-text">R.</span></h1>
          <h2 className="hero-role">CSE (AI & ML) student<span className="role-divider"> / </span><span className="role-accent">Aspiring Developer</span></h2>
          <p className="hero-description">I turn curiosity into code — exploring machine learning, building useful applications, and growing one project at a time.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a><a className="button button-ghost" href="#contact"><Mail size={17} /> Get in touch</a></div>
          <div className="social-links"><a href="https://github.com/Rithish-R-2008" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a><span className="social-separator" /> <span className="location-text">Tamil Nadu, India</span></div>
        </div>
        <div className="hero-visual" aria-label="Decorative code illustration">
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
          <div className="code-window"><div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span className="window-lock">●</span></div>
            <div className="code-content"><div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div><div><span className="line-number">02</span><span className="code-key">name:</span> <span className="code-green">'Rithish R.'</span>,</div><div><span className="line-number">03</span><span className="code-key">field:</span> <span className="code-green">'AI & ML'</span>,</div><div><span className="line-number">04</span><span className="code-key">curiosity:</span> <span className="code-orange">Infinity</span>,</div><div><span className="line-number">05</span><span className="code-key">building:</span> [</div><div><span className="line-number">06</span><span className="code-green indent">'smart solutions'</span>,</div><div><span className="line-number">07</span><span className="code-green indent">'meaningful projects'</span></div><div><span className="line-number">08</span> ]</div><div><span className="line-number">09</span>{'}'};</div><div className="code-cursor"><span className="line-number">10</span><span className="code-purple">// always learning</span><span className="cursor-blink">▋</span></div></div>
          </div>
          <div className="float-chip chip-ai"><BrainCircuit size={17} /><span><b>AI / ML</b><small>Curiosity to capability</small></span></div>
          <div className="float-chip chip-code"><Code2 size={17} /><span><b>Build. Learn.</b><small>Repeat.</small></span></div>
          <div className="visual-caption"><span className="caption-line" /> <span>IDEAS → EXPERIMENTS → IMPACT</span></div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDown size={14} /></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="about-section section-wrap" id="about"><SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>Curious mind. <span className="gradient-text">Builder's mindset.</span></>} />
        <div className="about-grid"><div className="about-text"><p>I'm a Computer Science and Engineering student specializing in <strong>Artificial Intelligence and Machine Learning</strong>. I enjoy learning how technology works and using that knowledge to build practical projects.</p><p>My current focus is strengthening my programming fundamentals, understanding data-driven systems, and developing full-stack applications that solve real problems.</p><a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16} /></a></div>
          <div className="about-stats"><div className="stat-card"><span className="stat-icon"><GraduationCap size={20} /></span><strong>CSE (AI & ML)</strong><span>Engineering student</span></div><div className="stat-card"><span className="stat-icon"><BrainCircuit size={20} /></span><strong>AI + Software</strong><span>Areas I'm exploring</span></div><div className="stat-card"><span className="stat-icon"><Sparkles size={20} /></span><strong>Always learning</strong><span>One step at a time</span></div><div className="stat-card"><span className="stat-icon"><BriefcaseBusiness size={20} /></span><strong>Project driven</strong><span>Learn by building</span></div></div>
        </div>
      </section>

      <section className="skills-section section-wrap" id="skills"><SectionHeading eyebrow="02 / MY TOOLKIT" title={<>Tools I use to <span className="gradient-text">bring ideas to life.</span></>} subtitle="A growing toolkit — built through coursework, practice, and personal projects." />
        <div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-mini-icon">{index === 0 ? <Code2 /> : index === 1 ? <BrainCircuit /> : index === 2 ? <Sparkles /> : <Database />}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="projects-section section-wrap" id="projects"><SectionHeading eyebrow="03 / SELECTED PROJECTS" title={<>Learning through <span className="gradient-text">building.</span></>} subtitle="A few projects exploring prediction, analytics, and computer vision." />
        <div className="project-toolbar"><span><span className="pulse-dot" /> FEATURED WORK</span><span className="api-status"><i className={apiConnected ? 'status-dot connected' : 'status-dot'} /> {apiConnected ? 'Connected to API' : 'Sample projects'}</span></div>
        <div className="projects-grid">{projects.map((project, index) => { const Icon = iconMap[project.icon] || (index === 0 ? Activity : index === 1 ? ChartNoAxesCombined : ScanText); return <article className={`project-card accent-${project.accent || ['violet','blue','pink'][index % 3]}`} key={project._id || project.title}>
          <div className="project-art"><div className="art-glow" /><div className="project-number">PROJECT / 0{index + 1}</div><div className="project-symbol"><Icon size={42} strokeWidth={1.35} /></div><div className="art-corner"><ArrowUpRight size={19} /></div><div className="art-grid" /></div>
          <div className="project-info"><span className="project-category">{project.category || 'Development'}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{(project.technologies || []).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.githubUrl || 'https://github.com/Rithish-R-2008'} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div></div>
        </article>; })}</div>
        <div className="more-projects"><span>More experiments are always in progress.</span><a className="text-link" href="https://github.com/Rithish-R-2008" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="experience-section section-wrap" id="experience"><SectionHeading eyebrow="04 / THE JOURNEY" title={<>Growing with every <span className="gradient-text">experience.</span></>} subtitle="My learning journey is a work in progress — here's what I'm building toward." />
        <div className="timeline"><div className="timeline-line" /><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">CURRENT CHAPTER</div><div className="timeline-content"><span className="timeline-icon"><GraduationCap size={20} /></span><h3>B.E. Computer Science & Engineering</h3><p className="timeline-subtitle">Artificial Intelligence & Machine Learning</p><p>Building a strong foundation in programming, data structures, databases, and machine learning while developing practical projects alongside coursework.</p><span className="timeline-tag">Expected graduation: 2029</span></div></article><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">HANDS-ON LEARNING</div><div className="timeline-content"><span className="timeline-icon"><Code2 size={20} /></span><h3>Personal & Applied Projects</h3><p>Practising the complete development process — from exploring a problem and preparing data to building an interface and documenting the result.</p><span className="timeline-tag">Learn by doing</span></div></article></div>
        <div className="cert-note"><Sparkles size={19} /><div><strong>Certificates & achievements</strong><p>Add your verified certificates and internship details here as you update your portfolio.</p></div><a href="#contact" aria-label="Ask about certificates"><ArrowUpRight size={17} /></a></div>
      </section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-panel"><div className="contact-copy"><span className="eyebrow">05 / GET IN TOUCH</span><h2>Have an idea?<br /><span className="gradient-text">Let's make it real.</span></h2><p>I'm always happy to connect with fellow learners, developers, and people building interesting things.</p><a className="contact-email" href="mailto:your.email@example.com"><Mail size={17} /> your.email@example.com <ArrowUpRight size={15} /></a><div className="contact-socials"><a href="https://github.com/Rithish-R-2008" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></div></div>
          <form className="contact-form" onSubmit={submitContact}><div className="form-heading"><span>Send a message</span><span className="form-secure"><span className="pulse-dot" /> QUICK NOTE</span></div><label htmlFor="name">Your name</label><input id="name" name="name" value={form.name} onChange={updateForm} placeholder="Jane Doe" required minLength="2" maxLength="80" /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={form.email} onChange={updateForm} placeholder="jane@example.com" required maxLength="120" /><label htmlFor="message">Your message</label><textarea id="message" name="message" value={form.message} onChange={updateForm} placeholder="Tell me what you're working on..." rows="4" required minLength="10" maxLength="2000" /><button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <Send size={16} /></button>{notice.text && <p className={`form-notice ${notice.type}`} role="status">{notice.type === 'success' && <Check size={15} />}{notice.text}</p>}<p className="form-disclaimer">Demo form: messages are logged by the backend and are not emailed yet.</p></form>
        </div></section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">R<span>.</span></span><span>Rithish<span className="brand-muted">.dev</span></span></a><span>Designed with curiosity <span className="footer-heart">✦</span> and a lot of learning.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Rithish R.</span></footer>
  </>;
}
