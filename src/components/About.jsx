import { FiZap, FiCheckCircle, FiRepeat } from "react-icons/fi";

function Feature({ icon, title, children }) {
  return (
    <article className="featureCard card card--hover">
      <div className="featureCard__top">
        <span className="featureIcon" aria-hidden="true">{icon}</span>
        <h3 className="featureTitle">{title}</h3>
      </div>
      <p className="muted featureText">{children}</p>
    </article>
  );
}

export default function About() {
  return (
    <section id="about" className="section section--tight">
      <div className="container">
        <div className="sectionHead">
          <div className="kicker">ABOUT</div>
          <h2 className="h2 h2--big">How I build</h2>
          <p className="lead">
            Waterloo Math student who likes building practical tools and systems — automation,
            clean workflows, and shipping things that save time.
          </p>
          <div className="sectionRule" />
        </div>

        <div className="grid2 grid2--features">
          <Feature icon={<FiZap />} title="What I do">
            I build clean workflows and tools, especially when something is repetitive or messy and needs structure.
          </Feature>

          <Feature icon={<FiRepeat />} title="How I work">
            Small iterations, fast feedback, clean execution. Build → test → tighten.
          </Feature>
        </div>

        <div className="miniHighlights">
          <div className="miniItem">
            <FiCheckCircle className="miniIcon" />
            <span>Automation + Data workflows</span>
          </div>
          <div className="miniItem">
            <FiCheckCircle className="miniIcon" />
            <span>Readable systems & clean UI</span>
          </div>
          <div className="miniItem">
            <FiCheckCircle className="miniIcon" />
            <span>Ship fast, then refine</span>
          </div>
        </div>
      </div>
    </section>
  );
}
