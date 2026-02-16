import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun, FiTerminal } from "react-icons/fi";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [activeId, setActiveId] = useState("home");
  const ratiosRef = useRef({}); // id -> intersectionRatio
  const activeRef = useRef("home");

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);

    if (!sections.length) return;

    // init ratios (prevents undefined weirdness)
    ratiosRef.current = Object.fromEntries(items.map((it) => [it.id, 0]));

    const pickBest = () => {
      const ratios = ratiosRef.current;

      // pick the section with the highest ratio
      let bestId = activeRef.current;
      let bestRatio = -1;

      for (const it of items) {
        const r = ratios[it.id] ?? 0;
        if (r > bestRatio) {
          bestRatio = r;
          bestId = it.id;
        }
      }

      if (bestId && bestId !== activeRef.current) {
        activeRef.current = bestId;
        setActiveId(bestId);
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = e.target.id;
          ratiosRef.current[id] = e.isIntersecting ? e.intersectionRatio : 0;
        }
        pickBest();
      },
      {
        root: null,
        // tuned for fixed navbar + long/short sections
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    history.replaceState(null, "", "#home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="nav nav--fixed">
      <div className="container nav__inner">
        <a
          className="nav__brandIcon"
          href="#home"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FiTerminal size={20} />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {items.map((it) => (
            <a
              key={it.id}
              className={`nav__link ${activeId === it.id ? "is-active" : ""}`}
              href={`#${it.id}`}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <button className="themeToggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
        </button>
      </div>
    </header>
  );
}