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
      <div className="container aboutSplit">
        
        {/* LEFT */}
        <div className="aboutLeft">
          <div className="aboutKicker">01. ABOUT</div>

          <h2 className="aboutTitle">
            Make it better.
          </h2>

          <p className="aboutText">
            I’m a Waterloo math student.
            I like building things that are actually useful — especially tools that automate work or clean up messy workflows.
          </p>

          <p className="aboutText muted">
            I’d rather take time to understand something properly than rush through it.
          </p>
        </div>

        {/* RIGHT */}
        <div className="aboutRight">
          <div className="aboutVisual">
            <div className="aboutCore">
              <span>CORE</span>
            </div>

            <div className="aboutFloating aboutFloating--code">{"</>"}</div>
            <div className="aboutFloating aboutFloating--bolt">⚡</div>
            <div className="aboutFloating aboutFloating--nodes">⛓</div>
          </div>
        </div>

      </div>
    </section>
  );
}
