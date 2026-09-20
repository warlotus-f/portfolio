export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
    },
    {
      category: "Backend",
      technologies: ["Python", "Django", "PHP", "Laravel", "REST APIs"]
    },
    {
      category: "Tools",
      technologies: ["Git", "GitHub", "MySQL", "SQLite", "VS Code"]
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">02 — SKILLS</span>

          <h2>What I work with.</h2>

          <p>
            Technologies and tools I use to build, develop, and maintain
            modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
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
      </div>
    </section>
  );
};