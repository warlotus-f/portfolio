export const Skills = () => {
  const coreSkills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Laravel", "Django", "REST API Design", "Webhooks"]
    },
    {
      category: "Architecture & Systems",
      technologies: ["Multi-Tenant Systems", "RBAC", "Real-Time Apps", "Offline-Tolerant Sync"]
    },
    {
      category: "Payments",
      technologies: ["Card & Wallet Integrations", "Payment APIs", "Multi-Provider Routing"]
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Schema Design"]
    }
  ];

  const toolBelt = [
    "PHP", "Python", "Flask", "SQLite", "Docker", "Nginx", "Linux",
    "CI/CD", "Vercel", "Git", "Rust", "Tauri", "WordPress", "Postman"
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">02 — SKILLS</span>
          <h2>What I work with.</h2>
          <p>
            Technologies, frameworks, and engineering practices I use to
            build, integrate, and deploy modern software products.
          </p>
        </div>

        <div className="skills-grid">
          {coreSkills.map((skill) => (
            <div className="skill-group" key={skill.category}>
              <h3>{skill.category}</h3>
              <div className="skill-list">
                {skill.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-toolbelt">
          <h4>Also comfortable with</h4>
          <div className="skill-list muted">
            {toolBelt.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};