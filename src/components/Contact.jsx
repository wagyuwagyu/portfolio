import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const email = "yii@uwaterloo.ca";
  const linkedin = "https://www.linkedin.com/in/yuto-ii";
  const github = "https://github.com/wagyuwagyu";
  const location = "Waterloo, ON";

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <p className="muted contactIntro">
          If you’re reaching out about a role, project, or collaboration, email is best.
        </p>

        <div className="contactPixelGrid">
          <a href={`mailto:${email}`} className="card contactPixelCard">
            <div className="contactPixelIcon">
              <FiMail />
            </div>
            <div className="contactPixelText">
              <span className="contactPixelLabel">Email</span>
              <span className="contactPixelValue">{email}</span>
            </div>
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="card contactPixelCard"
          >
            <div className="contactPixelIcon">
              <FiLinkedin />
            </div>
            <div className="contactPixelText">
              <span className="contactPixelLabel">LinkedIn</span>
              <span className="contactPixelValue">Connect</span>
            </div>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="card contactPixelCard"
          >
            <div className="contactPixelIcon">
              <FiGithub />
            </div>
            <div className="contactPixelText">
              <span className="contactPixelLabel">GitHub</span>
              <span className="contactPixelValue">wagyuwagyu</span>
            </div>
          </a>

          <div className="card contactPixelCard contactPixelCard--static">
            <div className="contactPixelIcon">
              <FiMapPin />
            </div>
            <div className="contactPixelText">
              <span className="contactPixelLabel">Location</span>
              <span className="contactPixelValue">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
