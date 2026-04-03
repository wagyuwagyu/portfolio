import seatingImg from "../assets/seating.png";
import eeImg from "../assets/ee-gametheory.png";
import quizImg from "../assets/quiz.png";
import valorantImg from "../assets/valorant-ml.png";
import iaImg from "../assets/iaImg.png";
import { StaggerGroup, StaggerItem } from "./Reveal";

const PROJECTS = [
  {
    title: "Valorant Match Outcome Prediction",
    desc:
      "Machine learning project that predicts professional Valorant match outcomes using player performance statistics. Built a full pipeline for data cleaning, preprocessing, Random Forest classification, model evaluation, K-Means clustering, and PCA-based visualization to analyze player performance patterns.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
    img: valorantImg,
    github: "https://github.com/wagyuwagyu/valorant-ml-project",
  },
  {
    title: "Automated Exam Seating Chart Generator",
    desc:
      "Python application that automatically generates optimized exam seating charts from raw student CSV data, reducing an 8+ hour manual scheduling process to minutes. Designed and implemented constraint handling for spacing rules, room capacities, and subject grouping. Built with SQLite-backed storage and dynamic filtering to allow administrators to adjust layouts instantly.",
    tech: ["Python", "SQLite", "Tkinter", "Pandas"],
    img: seatingImg,
    github: "https://github.com/wagyuwagyu/auto-seating-chart",
    pdf: "/auto-seating-chart.pdf",
  },
  {
    title: "Mathematics Game Theory Research Paper",
    desc:
      "Independent research project applying probabilistic and game-theoretic models to Tic-Tac-Toe and Connect Four. Derived expected win probabilities under optimal play assumptions and compared them against observed gameplay data. Identified where theoretical equilibrium models break down when human decision bias and bounded rationality are introduced.",
    tech: ["Game Theory", "Probability", "Modeling"],
    img: eeImg,
    pdf: "/game-theory-paper.pdf",
  },
  {
    title: "Badminton Shot Optimization Paper",
    desc:
      "Independent mathematical modeling project analyzing badminton clear shots using projectile motion, drag force, differential equations, and optimization. Derived velocity and displacement functions to model shuttlecock trajectory and identified an optimal launch angle to maximize horizontal range while keeping the shot in play.",
    tech: ["Geogebra", "Desmos", "Differential Equations", "Optimization"],
    img: iaImg,
    pdf: "/badminton-modeling-paper.pdf",
  },
  {
    title: "Educational Quiz Game",
    desc:
      "2D quiz application developed in Unity using modular C# architecture. Implemented state-driven quiz flow, reusable UI components, score tracking, and feedback animations. Iteratively refined gameplay through testing cycles to improve responsiveness, clarity, and user engagement.",
    tech: ["C#", "Unity"],
    img: quizImg,
  },
];

function ProjectCard({ p }) {
  return (
    <article className="card card--hover projectRow">
      <div className="projectRow__media">
        <img className="projectRow__img" src={p.img} alt={p.title} loading="lazy" />
      </div>

      <div className="projectRow__body">
        <div className="projectRow__titleWrap">
          <h3 className="card__title">{p.title}</h3>

          <div className="projectRow__links">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="projectRow__githubLink"
              >
                GitHub
              </a>
            )}

            {p.pdf && (
              <a
                href={p.pdf}
                target="_blank"
                rel="noreferrer"
                className="projectRow__githubLink"
              >
                PDF
              </a>
            )}
          </div>
        </div>

        <p className="muted">{p.desc}</p>

        <div className="chips chips--tight">
          {p.tech.map((t) => (
            <span key={t} className="chip chip--small">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <StaggerGroup delayChildren={0.05} stagger={0.08}>
          <StaggerItem y={10}>
            <h2 className="h2">Projects</h2>
          </StaggerItem>

          <StaggerItem y={10}>
            <p className="muted">
              Things I've built that I am passionate about:
            </p>
          </StaggerItem>

          <div className="projectsGrid">
            {PROJECTS.map((p) => (
              <StaggerItem key={p.title} y={14}>
                <ProjectCard p={p} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}