import fairnist from "../assets/fairnist.jpg";
import vex from "../assets/vex.jpg";
import jazz from "../assets/jazz.jpg";
import { FiAward } from "react-icons/fi";
import { StaggerGroup, StaggerItem } from "./Reveal"; // <-- adjust path if needed

function Tile({ title, subtitle, points, img }) {
  return (
    <article className="card card--hover tile">
      <div className="tile__media">
        {img ? <img className="tile__img" src={img} alt="" loading="lazy" /> : null}
      </div>

      <h3 className="card__title">{title}</h3>
      <p className="muted">{subtitle}</p>

      <ul className="bullets">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <StaggerGroup delayChildren={0.05} stagger={0.10}>
          {/* Title + intro */}
          <StaggerItem y={10}>
            <h2 className="h2">Leadership & Extracurriculars</h2>
          </StaggerItem>

          <StaggerItem y={10}>
            <p className="muted">
              The non-class stuff that actually shaped how I work: leading teams, building under
              pressure, showing up consistently.
            </p>
          </StaggerItem>

          {/* Tiles (staggered) */}
          <div className="grid3">
            <StaggerItem y={14}>
              <Tile
                title="FairNIST Student Leader"
                subtitle="Social enterprise selling coffee directly from farmers; focused on community support + operations."
                points={[
                  "Organized agendas and clear objectives for meetings",
                  "Coordinated updates across members + stakeholders",
                  "Built communication + planning habits that translate to real projects",
                ]}
                img={fairnist}
              />
            </StaggerItem>

            <StaggerItem y={14}>
              <Tile
                title="VEX V5 Robotics Programmer"
                subtitle="Built and iterated robot designs; learned real optimization through competitions."
                points={[
                  "Iterated multiple chassis designs to improve stability + speed",
                  "Tested performance, diagnosed failures, and refined designs based on results",
                  "Worked in a team setting: divided tasks, communicated changes, and shipped improvements fast",
                ]}
                img={vex}
              />
            </StaggerItem>

            <StaggerItem y={14}>
              <Tile
                title="Saxophone Jazz Band"
                subtitle="I like environments that force practice + performance (rehearsals, concerts, deadlines)."
                points={[
                  "Built confidence performing under pressure",
                  "Developed precision, timing, and ensemble coordination",
                  "Learned to take feedback quickly and improve week-to-week",
                ]}
                img={jazz}
              />
            </StaggerItem>
          </div>

          {/* Awards block */}
          <div className="awardsSection">
            <StaggerItem y={10}>
              <div className="awardsHeader">
                <FiAward size={25} />
                <h2 className="awardsTitle">Awards</h2>
              </div>
            </StaggerItem>

            <StaggerItem y={14}>
              <div className="card awardsCard">
                <div className="awardsGrid">
                  <ul>
                    <li>VEX Tournament Champion Award (2022)</li>
                    <li>Waterloo Math Competition Pascal Distinction Award</li>
                    <li>Waterloo Math Competition Cayley School Champion Medal</li>
                    <li>Global Citizen Diploma with Distinction</li>
                  </ul>

                  <ul>
                    <li>VEX Judges Award (2024)</li>
                    <li>Waterloo Math Competition Cayley Distinction Award</li>
                    <li>Waterloo Math Competition Fermat Distinction Award</li>
                  </ul>
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
