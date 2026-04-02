import { FiCode, FiDatabase, FiTool } from "react-icons/fi";

const SKILLS = [
  {
    icon: <FiDatabase />,
    title: "Data / Languages",
    items: ["Python", "SQL", "HTML", "C", "C#"],
  },
  {
    icon: <FiCode />,
    title: "Libraries / Frameworks",
    items: ["Pandas", "NumPy", "Tkinter", "MySQL", "Pygame", "Scikit-learn", "Matplotlib"],
  },
  {
    icon: <FiTool />,
    title: "Developer Tools",
    items: ["VS Code", "Anaconda", "Spyder", "PyCharm", "Unity"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skillsSection">
      <div className="container">
        <div className="sectionHead">
          <div className="kicker">SKILLS</div>
          <h2 className="h2 h2--big">What I use most</h2>
          <p className="lead">A snapshot of my everyday toolkit.</p>
          <div className="sectionRule" />
        </div>

        <div className="gridSkills">
          {SKILLS.map((g) => (
            <article key={g.title} className="skillCard card card--hover">
              <div className="skillCard__head">
                <span className="skillIcon" aria-hidden="true">{g.icon}</span>
                <h3 className="skillTitle">{g.title}</h3>
              </div>

              <div className="chips chips--tight">
                {g.items.map((t) => (
                  <span key={t} className="chip chip--small chip--pop">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
