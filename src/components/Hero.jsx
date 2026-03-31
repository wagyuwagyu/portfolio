import { FiLinkedin, FiMail, FiChevronDown } from "react-icons/fi";

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="heroFull">
      <div className="container heroContent">
        <div className="kicker">PORTFOLIO</div>

        <h1 className="heroMega">
          Hi, I'm <span className="accent">Yuto!</span>
        </h1>

        <p className="heroSub">
          1st Year Math Honours Co-op @ University of Waterloo
        </p>

        <div className="heroCTA">
            <a
            className="btn"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            Resume
            </a>


            <a className="btn btn--ghost" href="#projects">
                Projects
            </a>

            <a className="btn btn--ghost" href="#contact">
                Contact
            </a>
        </div>



        <div className="heroIcons">
          <a
            href="https://www.linkedin.com/in/yuto-ii"
            target="_blank"
            rel="noreferrer"
            className="iconLink"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>

          <a
            href="mailto:yii@uwaterloo.ca"
            className="iconLink"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <a href="#about" className="scrollHint">
        <FiChevronDown size={26} />
      </a>
    </section>
  );
}
