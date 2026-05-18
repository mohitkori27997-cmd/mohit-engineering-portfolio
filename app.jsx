<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Mohit Kori — Embedded Systems & Automation Engineer based in Frankfurt, Germany. STM32, PLC, MATLAB, PCB design, testing and validation.">
<title>Mohit Kori — Embedded Systems & Automation Engineer</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #080b12; --bg2: #0f1724; --bg3: #151f2e; --card: rgba(15, 23, 36, 0.72);
    --border: rgba(255,255,255,0.08); --border2: rgba(79,156,249,0.32);
    --text: #eef3fb; --muted: #9aa6b8; --dim: #5d6675;
    --blue: #4f9cf9; --cyan: #38bdf8; --green: #4ade80; --amber: #fbbf24;
    --shadow: 0 22px 60px rgba(0,0,0,0.38);
    --radius: 18px; --radius-sm: 12px;
    --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif;
  }
  html { scroll-behavior: smooth; }
  body {
    font-family: var(--font); background: var(--bg); color: var(--text); font-size: 14px; line-height: 1.6;
    background-image:
      radial-gradient(circle at 80% 0%, rgba(79,156,249,0.16), transparent 32%),
      radial-gradient(circle at 10% 20%, rgba(56,189,248,0.10), transparent 28%),
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: auto, auto, 48px 48px, 48px 48px;
  }
  body::before {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: -1;
    background: radial-gradient(circle at 78% 18%, rgba(79,156,249,0.18), transparent 24%),
                radial-gradient(circle at 20% 85%, rgba(74,222,128,0.08), transparent 26%);
  }
  a { color: var(--text); text-decoration: none; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--dim); border-radius: 4px; }

  .layout { display: flex; min-height: 100vh; max-width: 1180px; margin: 0 auto; }
  .sidebar {
    width: 330px; flex-shrink: 0; position: sticky; top: 0; height: 100vh;
    overflow-y: auto;  overflow-x: hidden;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 52px 34px; border-right: 1px solid var(--border); backdrop-filter: blur(18px);
  }
  .avatar {
    width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; margin-bottom: 18px;
    background: linear-gradient(135deg, rgba(79,156,249,0.26), rgba(56,189,248,0.08));
    border: 1px solid var(--border2); font-size: 22px; font-weight: 800; box-shadow: 0 0 30px rgba(79,156,249,0.16);
  }
  .sidebar-name { font-size: 24px; font-weight: 800; letter-spacing: -0.7px; margin-bottom: 4px; }
  .sidebar-role { font-size: 13px; color: var(--cyan); margin-bottom: 18px; font-weight: 600; }
  .sidebar-bio { font-size: 13px; color: var(--muted); line-height: 1.75; margin-bottom: 30px; }
  .mini-meta { display: flex; flex-direction: column; gap: 8px; margin-bottom: 30px; }
  .mini-pill { font-size: 12px; color: var(--muted); border: 1px solid var(--border); background: rgba(255,255,255,0.03); padding: 7px 10px; border-radius: 999px; }
  .nav-list { list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .nav-list a { font-size: 13px; font-weight: 600; color: var(--muted); display: flex; align-items: center; gap: 10px; padding: 7px 0; transition: color 0.2s; }
  .nav-list a:hover, .nav-list a.active { color: var(--text); }
  .nav-list a::before { content: ''; display: block; width: 22px; height: 1px; background: currentColor; transition: width 0.2s; }
  .nav-list a:hover::before, .nav-list a.active::before { width: 42px; color: var(--cyan); }
  .sidebar-links { display: flex; flex-wrap: wrap; gap: 12px; }
  .sidebar-links a { color: var(--muted); font-size: 12px; display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s; }
  .sidebar-links a:hover { color: var(--cyan); }
  .sidebar-links svg { width: 14px; height: 14px; }

  .main { flex: 1; padding: 52px 52px 120px; overflow-y: auto; }
  section { margin-bottom: 86px; scroll-margin-top: 48px; }
  .section-label { font-size: 11px; font-weight: 800; letter-spacing: 1.4px; text-transform: uppercase; color: var(--cyan); margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
  .section-label::after { content: ''; height: 1px; flex: 1; background: linear-gradient(90deg, rgba(56,189,248,0.3), transparent); }

  .top-banner {
    display: inline-flex; gap: 8px; align-items: center; font-size: 12px; color: var(--cyan);
    border: 1px solid rgba(56,189,248,0.24); background: rgba(56,189,248,0.06);
    padding: 8px 12px; border-radius: 999px; margin-bottom: 24px;
  }
  .about-greeting { font-size: 13px; color: var(--muted); margin-bottom: 10px; }
  .about-heading { font-size: clamp(42px, 7vw, 72px); font-weight: 900; letter-spacing: -2.8px; line-height: 0.95; margin-bottom: 24px; }
  .about-heading span { background: linear-gradient(90deg, var(--blue), var(--cyan), var(--text)); -webkit-background-clip: text; color: transparent; }
  .about-text { font-size: 15px; color: var(--muted); line-height: 1.85; max-width: 670px; margin-bottom: 16px; }
  .about-text strong { color: var(--text); font-weight: 700; }
  .hero-stats { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 10px; max-width: 660px; margin: 26px 0 6px; }
  .stat-card { border: 1px solid var(--border); background: rgba(255,255,255,0.035); border-radius: 14px; padding: 14px; }
  .stat-num { font-size: 20px; font-weight: 850; color: var(--text); }
  .stat-label { color: var(--muted); font-size: 11px; }
  .status-pill { display: inline-flex; align-items: center; gap: 8px; background: rgba(74,222,128,0.07); border: 1px solid rgba(74,222,128,0.22); border-radius: 20px; padding: 7px 14px; font-size: 12px; color: var(--text); margin-top: 12px; }
  .status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px var(--green); animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.45} }
  .hero-buttons { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
  .btn-primary, .btn-secondary { padding: 12px 18px; border-radius: 11px; font-size: 13px; font-weight: 800; transition: all 0.25s ease; border: 1px solid transparent; }
  .btn-primary { background: linear-gradient(135deg, var(--blue), var(--cyan)); color: #06101f; box-shadow: 0 12px 34px rgba(79,156,249,0.2); }
  .btn-primary:hover, .btn-secondary:hover { transform: translateY(-3px); }
  .btn-secondary { border-color: var(--border); background: rgba(255,255,255,0.04); color: var(--text); }
  .btn-secondary:hover { border-color: var(--border2); }

  .skills-grid { display: grid; gap: 14px; }
  .skill-row { display: grid; grid-template-columns: 180px 1fr; gap: 16px; align-items: start; padding: 16px; border: 1px solid var(--border); background: var(--card); border-radius: var(--radius-sm); }
  .skill-row-label { font-size: 13px; color: var(--text); font-weight: 750; display: flex; gap: 8px; align-items: center; }
  .skill-tags, .proj-tags { display: flex; flex-wrap: wrap; gap: 7px; }
  .tag { font-size: 11.5px; background: rgba(255,255,255,0.045); color: var(--text); border: 1px solid var(--border); border-radius: 999px; padding: 4px 10px; transition: all 0.2s; }
  .tag:hover { border-color: var(--border2); transform: translateY(-1px); }
  .tag.hi { border-color: rgba(79,156,249,0.35); color: var(--cyan); background: rgba(79,156,249,0.08); }

  .proj-list, .exp-list, .edu-list { display: grid; gap: 14px; }
  .proj-card, .exp-card, .edu-card, .contact-card, .learning-card {
    background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); transition: all 0.3s ease; backdrop-filter: blur(18px);
  }
  .proj-card:hover, .exp-card:hover, .edu-card:hover, .contact-card:hover, .learning-card:hover { transform: translateY(-5px); border-color: var(--border2); box-shadow: var(--shadow); }
  .proj-card { padding: 24px; position: relative; overflow: hidden; }
  .proj-card::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 3px; background: linear-gradient(90deg, var(--blue), transparent); opacity: 0.75; }
  .proj-visual { height: 112px; border-radius: 14px; border: 1px solid var(--border); margin-bottom: 18px; overflow: hidden; background: linear-gradient(135deg, rgba(79,156,249,0.12), rgba(255,255,255,0.03)); position: relative; }
  .proj-visual::before { content: ''; position: absolute; inset: 18px; border: 1px solid rgba(56,189,248,0.26); border-radius: 10px; }
  .proj-visual::after { content: attr(data-label); position: absolute; left: 18px; bottom: 14px; font-size: 12px; color: var(--cyan); font-weight: 800; letter-spacing: 0.5px; }
  .circuit-lines { position:absolute; inset:0; background-image: linear-gradient(90deg, transparent 0 20%, rgba(56,189,248,0.18) 20% 21%, transparent 21% 100%), linear-gradient(0deg, transparent 0 45%, rgba(56,189,248,0.14) 45% 46%, transparent 46% 100%); background-size: 80px 48px; opacity: 0.8; }
  .proj-top, .exp-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 8px; }
  .proj-title, .exp-title { font-size: 16px; font-weight: 800; letter-spacing: -0.25px; }
  .proj-date, .exp-date { font-size: 11px; color: var(--muted); white-space: nowrap; margin-top: 3px; }
  .proj-desc, .exp-company { font-size: 13px; color: var(--muted); margin-bottom: 14px; line-height: 1.7; }
  .proj-bullets, .exp-bullets { list-style: none; margin-bottom: 16px; display: flex; flex-direction: column; gap: 7px; }
  .proj-bullets li, .exp-bullets li { font-size: 13px; color: var(--muted); padding-left: 18px; position: relative; line-height: 1.65; }
  .proj-bullets li::before, .exp-bullets li::before { content: '▹'; position: absolute; left: 0; color: var(--cyan); }
  .proj-bullets li strong { color: var(--text); font-weight: 750; }
  .proj-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  .proj-link { font-size: 12px; color: var(--cyan); display: flex; align-items: center; gap: 5px; font-weight: 750; }
  .proj-link svg { width: 13px; height: 13px; }

  .exp-card { padding: 24px; }
  .edu-card { padding: 20px 24px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .edu-deg { font-size: 14px; font-weight: 800; margin-bottom: 4px; }
  .edu-uni, .edu-date { font-size: 12px; color: var(--muted); }
  .edu-right { text-align: right; flex-shrink: 0; }
  .edu-badge { display: inline-block; font-size: 10px; font-weight: 800; letter-spacing: 0.3px; padding: 4px 10px; border-radius: 999px; margin-bottom: 5px; }
  .badge-green { background: rgba(74,222,128,0.08); color: var(--green); border: 1px solid rgba(74,222,128,0.22); }
  .badge-blue { background: rgba(79,156,249,0.08); color: var(--cyan); border: 1px solid rgba(79,156,249,0.25); }
  .learning-card { padding: 22px; }
  .learning-card p { color: var(--muted); margin-bottom: 14px; }

  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .contact-card { padding: 18px 20px; display: flex; align-items: center; gap: 12px; }
  .contact-card svg { width: 17px; height: 17px; color: var(--cyan); flex-shrink: 0; }
  .contact-label { font-size: 11px; color: var(--muted); margin-bottom: 2px; }
  .contact-val { font-size: 13px; color: var(--text); font-weight: 650; }
  .footer { font-size: 11px; color: var(--muted); padding-top: 34px; border-top: 1px solid var(--border); display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; }
  .floating-tech {
    position: fixed; left: 50%; bottom: 18px; transform: translateX(-50%); z-index: 20;
    border: 1px solid var(--border); background: rgba(8,11,18,0.72); backdrop-filter: blur(18px);
    color: var(--muted); padding: 9px 16px; border-radius: 999px; font-size: 12px; box-shadow: var(--shadow);
  }
  .reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
.skills-title {
  font-size: 46px;
  font-weight: 800;
  margin-bottom: 42px;
  background: linear-gradient(90deg, var(--blue), #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skills-title::after {
  content: "";
  display: block;
  width: 78px;
  height: 3px;
  background: linear-gradient(90deg, #22d3ee, #38bdf8);
  margin-top: 12px;
  border-radius: 999px;
}

.premium-skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.premium-skill-card {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 22px;
  padding: 34px 30px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  transition: all 0.3s ease;
}

.premium-skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 25px 70px rgba(56, 189, 248, 0.12);
}

.premium-skill-card h3 {
  font-size: 16px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #22d3ee;
  margin-bottom: 30px;
}

.skill-item {
  margin-bottom: 24px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 14px;
}

.skill-info span:first-child {
  color: var(--text);
  font-weight: 600;
}

.skill-info span:last-child {
  color: var(--muted);
  font-size: 12px;
}

.skill-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #22d3ee, #38bdf8);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
}

.skill-fill.advanced {
  width: 88%;
}

.skill-fill.intermediate {
  width: 74%;
}

.skill-fill.working {
  width: 58%;
}

@media(max-width: 900px) {
  .premium-skills-grid {
    grid-template-columns: 1fr;
  }

  .skills-title {
    font-size: 38px;
  }
}
.contact-dropdown {
  position: relative;
  display: inline-block;
}

.contact-toggle {
  cursor: pointer;
}

.contact-menu {
  display: none;
  position: absolute;
  top: 54px;
  left: 0;
  min-width: 180px;
  background: rgba(15, 23, 36, 0.96);
  border: 1px solid var(--border2);
  border-radius: 14px;
  padding: 8px;
  box-shadow: var(--shadow);
  z-index: 100;
  backdrop-filter: blur(14px);
}

.contact-menu a {
  display: block;
  padding: 11px 14px;
  border-radius: 10px;
  font-size: 13px;
  color: var(--text);
  transition: all 0.2s ease;
}

.contact-menu a:hover {
  background: rgba(56, 189, 248, 0.12);
  color: var(--cyan);
}

.contact-menu.show {
  display: block;
}
.mobile-menu-btn {
  display: none;
}

.sidebar-overlay {
  display: none;
}
  @media(max-width: 780px) {
    .layout { flex-direction: column; }
    .sidebar {  position: fixed;  top: 0;  left: -100%;  width: 82%;  max-width: 330px;  height: 100vh;  z-index: 180;  transition: left 0.3s ease;  overflow-y: auto;  border-right: 1px solid var(--border);  border-bottom: none;  background: var(--bg2);}

.sidebar.open {  left: 0;}
    .nav-list { flex-direction: row; flex-wrap: wrap; gap: 12px; }
    .nav-list a::before { display: none; }
    .main { padding: 34px 22px 96px; }
    section { margin-bottom: 66px; }
    .skill-row, .hero-stats { grid-template-columns: 1fr; }
    .contact-grid { grid-template-columns: 1fr; }
    .edu-card { flex-direction: column; align-items: flex-start; }
    .edu-right { text-align: left; }
    .floating-tech { width: calc(100% - 28px); text-align: center; font-size: 11px; }
  }
</style>
</head>
<body>
<button class="mobile-menu-btn" onclick="toggleSidebar()">☰</button>
<div class="sidebar-overlay" onclick="toggleSidebar()"></div>
<div class="floating-tech">STM32 • PLC • MATLAB/Simulink • Embedded C/C++ • PCB Design • Testing</div>
<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-top">
      <div class="avatar">MK</div>
      <div class="sidebar-name">Mohit Kori</div>
      <div class="sidebar-role">Embedded Systems & Automation Engineer</div>
      <div class="sidebar-bio">Embedded engineer with experience in STM32 firmware, PLC automation, power electronics, PCB validation, and hardware/software debugging workflows.</div>
      <div class="mini-meta">
        <div class="mini-pill">📍 Frankfurt, Germany</div>
        <div class="mini-pill">✅ Immediate Joiner</div>
        <div class="mini-pill">🌍 Open across Germany</div>
      </div>
      <nav>
        <ul class="nav-list">
          <li><a href="#about" class="active">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#learning">Learning</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="sidebar-links">
      <a href="https://github.com/mohitkori27997-cmd" target="_blank" rel="noopener">GitHub</a>
      <a href="https://linkedin.com/in/mohit-kori-3a7141266" target="_blank" rel="noopener">LinkedIn</a>
      <a href="mailto:19mohitkori@gmail.com">Email</a>
    </div>
  </aside>

  <main class="main">
    <section id="about" class="reveal">
      <div class="top-banner">⚡ Frankfurt-based engineer open to Embedded / Automation roles</div>
      <div class="about-greeting">Hi, I'm Mohit 👋</div>
      <h1 class="about-heading">Embedded Systems<br><span>& Automation Engineer</span></h1>
      <p class="about-text">I build and validate <strong>real-time embedded and automation systems</strong> using STM32, Embedded C/C++, PLC logic, MATLAB/Simulink, PCB design tools, and structured hardware debugging workflows.</p>
      <p class="about-text">My background combines <strong>MSc Power Electronics & Control</strong>, electronics testing experience, and Amazon operations leadership — giving me a practical engineering mindset for building reliable, measurable, and industry-ready systems.</p>
      <div class="hero-stats">
        <div class="stat-card"><div class="stat-num">50+</div><div class="stat-label">systems tested & debugged</div></div>
        <div class="stat-card"><div class="stat-num">20%</div><div class="stat-label">fault detection improvement</div></div>
        <div class="stat-card"><div class="stat-num">5k+</div><div class="stat-label">daily units coordinated at Amazon</div></div>
      </div>
      <div class="status-pill"><span class="status-dot"></span> Based in Frankfurt · Immediate Joiner · Open Across Germany</div>
      <div class="hero-buttons">
        <a href="#projects" class="btn-primary">View Engineering Projects</a>
        <a href="Mohit_Kori_CV.pdf" download class="btn-secondary">
  Download CV
</a>
        <div class="contact-dropdown">
  <button class="btn-secondary contact-toggle" type="button" onclick="toggleContactMenu()">
    Contact Me
  </button>

  <div class="contact-menu" id="contactMenu">
    <a href="tel:+4915216003712">📞 Call Me</a>
    <a href="mailto:19mohitkori@gmail.com">✉️ Email Me</a>
  </div>
</div>
      </div>
    </section>

   <section id="skills" class="skills-section">
  <div class="section-label">Engineering Skills</div>
  <h2 class="skills-title">Skills</h2>

  <div class="premium-skills-grid">

    <div class="premium-skill-card">
      <h3>Embedded Systems</h3>

      <div class="skill-item">
        <div class="skill-info"><span>Embedded C/C++</span><span>Advanced</span></div>
        <div class="skill-bar"><div class="skill-fill advanced"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>STM32</span><span>Advanced</span></div>
        <div class="skill-bar"><div class="skill-fill advanced"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>ARM Cortex-M</span><span>Intermediate</span></div>
        <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>ADC / PWM / UART</span><span>Advanced</span></div>
        <div class="skill-bar"><div class="skill-fill advanced"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>Interrupts & Timers</span><span>Intermediate</span></div>
        <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
      </div>
    </div>

    <div class="premium-skill-card">
      <h3>Electronics & Automation</h3>

      <div class="skill-item">
        <div class="skill-info"><span>Power Electronics</span><span>Intermediate</span></div>
        <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>PCB Design</span><span>Intermediate</span></div>
        <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>MATLAB/Simulink</span><span>Advanced</span></div>
        <div class="skill-bar"><div class="skill-fill advanced"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>Siemens TIA Portal</span><span>Intermediate</span></div>
        <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>PLC Fundamentals</span><span>Intermediate</span></div>
        <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
      </div>
    </div>

    <div class="premium-skill-card">
      <h3>Testing & Tools</h3>

      <div class="skill-item">
        <div class="skill-info"><span>Oscilloscope</span><span>Advanced</span></div>
        <div class="skill-bar"><div class="skill-fill advanced"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>Multimeter</span><span>Advanced</span></div>
        <div class="skill-bar"><div class="skill-fill advanced"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>Root Cause Analysis</span><span>Advanced</span></div>
        <div class="skill-bar"><div class="skill-fill advanced"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>KiCad / EasyEDA</span><span>Intermediate</span></div>
        <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
      </div>

      <div class="skill-item">
        <div class="skill-info"><span>Python / GitHub</span><span>Working Knowledge</span></div>
        <div class="skill-bar"><div class="skill-fill working"></div></div>
      </div>
    </div>

  </div>
</section>

    <section id="projects" class="reveal">
      <div class="section-label">Selected Engineering Projects</div>
      <div class="proj-list">
        <div class="proj-card">
          <div class="proj-visual" data-label="STM32 • PID • PWM • ADC"><div class="circuit-lines"></div></div>
          <div class="proj-top"><div class="proj-title">STM32-Based Line-Following & Obstacle-Aware System</div><div class="proj-date">Feb 2023</div></div>
          <div class="proj-desc">Real-time embedded control project demonstrating firmware, sensor processing, motor control, and debugging methodology.</div>
          <ul class="proj-bullets">
            <li>Developed <strong>Embedded C/C++ firmware</strong> on STM32 ARM Cortex-M for real-time motor and sensor control.</li>
            <li>Implemented ADC sensor acquisition, timer-driven PWM, and interrupt-driven control logic to reduce response delay.</li>
            <li>Applied PID control and iterative hardware testing to improve tracking stability and reduce oscillation.</li>
            <li>Used oscilloscope, GDB-style debugging, and structured RCA to validate hardware/firmware behaviour.</li>
          </ul>
          <div class="proj-footer"><div class="proj-tags"><span class="tag hi">STM32</span><span class="tag hi">Embedded C</span><span class="tag">PID</span><span class="tag">ADC</span><span class="tag">PWM</span><span class="tag">Debugging</span></div><a href="https://github.com/mohitkori27997-cmd" target="_blank" rel="noopener" class="proj-link">GitHub ↗</a></div>
        </div>

        <div class="proj-card">
          <div class="proj-visual" data-label="Robot • HIL • MATLAB"><div class="circuit-lines"></div></div>
          <div class="proj-top"><div class="proj-title">Autonomous Hazard Inspection Robot</div><div class="proj-date">Aug 2023</div></div>
          <div class="proj-desc">Sensor-based autonomous navigation system with MATLAB/Simulink modelling and hardware-in-loop validation.</div>
          <ul class="proj-bullets">
            <li>Developed embedded firmware for autonomous movement, obstacle detection, and PWM motor actuation.</li>
            <li>Built MATLAB/Simulink model to validate sensor response and decision logic before hardware testing.</li>
            <li>Performed HIL-style testing to verify behaviour across multiple edge cases and operating conditions.</li>
            <li>Translated simulation results into practical hardware tuning and debugging improvements.</li>
          </ul>
          <div class="proj-footer"><div class="proj-tags"><span class="tag hi">Embedded C</span><span class="tag hi">MATLAB</span><span class="tag">HIL Testing</span><span class="tag">Sensors</span><span class="tag">PWM</span></div><a href="https://github.com/mohitkori27997-cmd" target="_blank" rel="noopener" class="proj-link">GitHub ↗</a></div>
        </div>

        <div class="proj-card">
          <div class="proj-visual" data-label="PCB • KiCad • Validation"><div class="circuit-lines"></div></div>
          <div class="proj-top"><div class="proj-title">Custom PCB Design — Microcontroller-Based System</div><div class="proj-date">Nov 2024</div></div>
          <div class="proj-desc">PCB design project covering schematic capture, layout, design checks, and pre-prototyping validation.</div>
          <ul class="proj-bullets">
            <li>Designed full schematic and PCB layout using <strong>KiCad and EasyEDA</strong> for a microcontroller-based system.</li>
            <li>Applied basic power supply design, grounding, signal routing, and manufacturability considerations.</li>
            <li>Performed design rule checks and reviewed board layout before prototype preparation.</li>
          </ul>
          <div class="proj-footer"><div class="proj-tags"><span class="tag hi">KiCad</span><span class="tag">EasyEDA</span><span class="tag">PCB Design</span><span class="tag">DRC</span><span class="tag">Validation</span></div></div>
        </div>
      </div>
    </section>

    <section id="experience" class="reveal">
      <div class="section-label">Experience</div>
      <div class="exp-list">
        <div class="exp-card"><div class="exp-top"><div class="exp-title">Electronics & Electrical Test Engineer</div><div class="exp-date">Jan 2021 – Sep 2022</div></div><div class="exp-company">Multispan Control Instruments Pvt. Ltd. · Ahmedabad, India</div><ul class="exp-bullets"><li>Tested and troubleshot 50+ embedded power supply and DC/DC converter systems, improving fault detection by approximately 20%.</li><li>Diagnosed electrical faults using oscilloscopes, multimeters, and structured hardware validation methods.</li><li>Created repeatable test procedures, improving test efficiency by approximately 25% and reducing recurring faults through RCA.</li><li>Prepared 30+ technical reports with clear traceability for quality and compliance review.</li></ul></div>
        <div class="exp-card"><div class="exp-top"><div class="exp-title">Operations Supervisor</div><div class="exp-date">Nov 2022 – Apr 2026</div></div><div class="exp-company">Amazon DLU2 · Luton, United Kingdom</div><ul class="exp-bullets"><li>Coordinated high-throughput shift operations handling 5,000+ units/day while maintaining safety, quality, and delivery discipline.</li><li>Improved operational metrics from 96% to 98% through root cause analysis, escalation handling, and data-driven actions.</li><li>Reduced process delays by approximately 15% through workflow coordination and cross-functional communication.</li></ul></div>
      </div>
    </section>

    <section id="learning" class="reveal">
      <div class="section-label">Currently Learning & Certifications</div>
      <div class="learning-card">
        <p>Focused on strengthening industry-ready automation, embedded firmware, and hardware validation capability for German engineering roles.</p>
        <div class="skill-tags"><span class="tag hi">Siemens TIA Portal</span><span class="tag hi">PLC Programming</span><span class="tag">Embedded Linux</span><span class="tag">RTOS</span><span class="tag">CAN Protocol</span><span class="tag">FPGA / Verilog</span><span class="tag">Advanced Hardware Debugging</span></div>
      </div>
    </section>

    <section id="education" class="reveal">
      <div class="section-label">Education</div>
      <div class="edu-list">
        <div class="edu-card"><div><div class="edu-deg">MSc Power Electronics and Control</div><div class="edu-uni">University of Hertfordshire, United Kingdom</div></div><div class="edu-right"><div><span class="edu-badge badge-blue">Commendation</span></div><div class="edu-date">2022 – 2023</div></div></div>
        <div class="edu-card"><div><div class="edu-deg">MSc Electronics</div><div class="edu-uni">Sardar Patel University, India</div></div><div class="edu-right"><div><span class="edu-badge badge-green">Distinction</span></div><div class="edu-date">2018 – 2020</div></div></div>
        <div class="edu-card"><div><div class="edu-deg">BSc Instrumentation</div><div class="edu-uni">Sardar Patel University, India</div></div><div class="edu-right"><div><span class="edu-badge badge-green">Distinction</span></div><div class="edu-date">2015 – 2018</div></div></div>
      </div>
    </section>

    <section id="contact" class="reveal">
      <div class="section-label">Contact</div>
      <div class="contact-grid">
        <a href="mailto:19mohitkori@gmail.com" class="contact-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg><div><div class="contact-label">Email</div><div class="contact-val">19mohitkori@gmail.com</div></div></a>
        <a href="tel:+4915216003712" class="contact-card">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
    19.79 19.79 0 0 1-8.63-3.07 
    19.5 19.5 0 0 1-6-6 
    19.79 19.79 0 0 1-3.07-8.67 
    A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 
    c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L8.09 9.91
    a16 16 0 0 0 6 6l1.48-1.2a2 2 0 0 1 2.11-.45
    c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z"/>
  </svg>

  <div>
    <div class="contact-label">Phone</div>
    <div class="contact-val">+49 15216003712</div>
  </div>
</a>
        <a href="https://linkedin.com/in/mohit-kori-3a7141266" target="_blank" rel="noopener" class="contact-card"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg><div><div class="contact-label">LinkedIn</div><div class="contact-val">Mohit Kori</div></div></a>
        <a href="https://github.com/mohitkori27997-cmd" target="_blank" rel="noopener" class="contact-card"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.21 10.21 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"/></svg><div><div class="contact-label">GitHub</div><div class="contact-val">Mohit Kori</div></div></a>
        <div class="contact-card"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg><div><div class="contact-label">Location</div><div class="contact-val">Frankfurt, Germany · Open across Germany</div></div></div>
      </div>
    </section>

    <div class="footer"><span>Built by Mohit Kori · 2026</span><span>Designed for embedded, automation, and validation roles</span></div>
  </main>
</div>


<script>
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-list a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));

        const active = document.querySelector(
          `.nav-list a[href="#${e.target.id}"]`
        );

        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.28 });

  sections.forEach(s => observer.observe(s));

  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  function toggleContactMenu() {
    document.getElementById("contactMenu").classList.toggle("show");
  }

  document.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".contact-dropdown");
    const menu = document.getElementById("contactMenu");

    if (dropdown && menu && !dropdown.contains(event.target)) {
      menu.classList.remove("show");
    }
  });
</script>
</body>
</html>
