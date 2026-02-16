export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <p className="muted contactIntro">
          If you're reaching out about a role, project, or collaboration —
          email is best.
        </p>

        <div className="contactGrid">
          {/* LEFT CARD */}
          <div className="card contactCard">
            <h3 className="card__title">Get in touch</h3>

            <a
              href="mailto:yii@uwaterloo.ca"
              className="contactEmail"
            >
              yii@uwaterloo.ca
            </a>

            <div className="contactActions">
              <button
                className="btn btn--ghost"
                onClick={() =>
                  navigator.clipboard.writeText("yii@uwaterloo.ca")
                }
              >
                Copy email
              </button>

              <a
                href="https://www.linkedin.com/in/yuto-ii"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="card contactCard">
            <h3 className="card__title">Quick message</h3>

            <form className="contactForm">
              <input
                type="text"
                placeholder="Your name"
                className="contactInput"
              />

              <textarea
                placeholder="Say hi..."
                className="contactTextarea"
                rows="4"
              />

              <button type="button" className="btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
