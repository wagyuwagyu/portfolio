export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted">© {new Date().getFullYear()} Yuto</p>
        <a className="link" href="#home">
          Back to top
        </a>
      </div>
    </footer>
  );
}