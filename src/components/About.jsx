
import gamingImg from "../assets/gaming.jpg";

export default function About() {
  return (
    <section id="about" className="section section--tight">
      <div className="container aboutSplit">
        <div className="aboutLeft">
          <div className="aboutKicker">ABOUT</div>

          <h2 className="h2 h2--big aboutTitle">Make it better</h2>

          <p className="aboutText">
            I’m a Waterloo math student and a gamer at heart. I like building
            things I’d actually use — tools, systems, or anything that makes
            something feel smoother or more enjoyable.
          </p>

          <p className="aboutText muted">
            Most of what I build starts from “this is annoying” and turns into
            “this should exist.”
          </p>
        </div>

        <div className="aboutRight">
          <div className="aboutImageWrap">
            <img
              src={gamingImg}
              alt="Yuto gaming at a PC setup"
              className="aboutImage"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
