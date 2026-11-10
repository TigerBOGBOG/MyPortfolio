import { useState, useEffect, useRef } from "react";
import { profile, skills, projects, } from "./data";
import profileImage from "./assets/Profile.jpeg";
import "./App.css";

// Hook: ตรวจว่า element เข้ามาในจอหรือยัง
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Section({ id, title, children }) {
  const [ref, visible] = useReveal();
  return (
    <section id={id} ref={ref} className={`section ${visible ? "show" : ""}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const navItems = [
    { id: "about", label: "about" },
    { id: "skills", label: "skills" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <header className="navbar">
        <div className="container nav-inner">
          <span className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            {profile.name.split(" ")[0]}<span className="dot">.</span>
          </span>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="icon-btn burger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-hi">Hi my name is</p>
          <h1 className="hero-name">{profile.name}</h1>
          <h2 className="hero-role">{profile.role}</h2>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-btns">
            <button className="btn primary" onClick={() => scrollTo("projects")}>
              ดูผลงาน
            </button>
            <a className="btn ghost" href={`mailto:${profile.email}`}>
              ติดต่อผม
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-ring">
            <img src={profileImage} alt={profile.name} />
          </div>
        </div>
      </section>

        {/* ---------- ABOUT ---------- */}
        <Section id="about" title="About">
          <p className="about-text">{profile.about}</p>
        </Section>

        {/* ---------- SKILLS ---------- */}
          <Section id="skills" title="Skills">
            <div className="skills-container">
              {Object.entries(skills).map(([category, items]) => (
                <div className="skill-category" key={category}>
                  <h3>{category}</h3>

                  <div className="skills-grid">
                    {items.map((skill) => (
                      <div className="skill-item" key={skill.name}>
                        <img
                          src={`/icons/${skill.icon}.svg`}
                          alt={skill.name}
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

        {/* ---------- PROJECTS ---------- */}
        <Section id="projects" title="Project">
          <div className="projects-grid">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="card" target="_blank" rel="noreferrer">
                <div className="card-img">
                  <span className={`status ${p.status.toLowerCase().replaceAll(" ", "-")}`}>
                    {p.status}</span>
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* ---------- CONTACT ---------- */}
        <Section id="contact" title="Contact">
          <div className="contact">
            <p className="muted">Looking for a developer to work on a project or collaborate on something interesting? Feel free to get in touch!
</p>
            <a className="btn primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              {/*<a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>*/}
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name} — by React
      </footer>
    </>
  );
}