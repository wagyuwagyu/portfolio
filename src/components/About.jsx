
import gamingImg from "../assets/gaming.JPG";

export default function About() {
  return (
    <section id="about" className="section section--tight">
      <div className="container aboutSplit">
        <div className="aboutLeft">
          <div className="aboutKicker">ABOUT</div>

          <h2 className="h2 h2--big aboutTitle">Make it better</h2>

          <p className="aboutText">
           "On my business card, I am a corporate president. 
           In my mind, I am a game developer. 
           But in my heart, I am a gamer." - Satoru Iwata, 4th President of Nintendo
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
