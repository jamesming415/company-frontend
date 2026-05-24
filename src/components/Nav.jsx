import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../data/siteData.jsx";
import { Logo } from "./Logo.jsx";

function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let frame = 0;
    const updateScrolled = () => {
      frame = 0;
      const nextScrolled = window.scrollY > 20;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const go = (p) => {
    setMenuOpen(false);
    if (p === page) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setPage(p);
  };

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <Logo onClick={() => go("Home")} />
        <div className="nav-links">
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              className={`nav-link${page === n ? " active" : ""}${n === "Contact Us" ? " nav-link-contact" : ""}`}
              onClick={() => go(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" type="button">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((n) => (
          <button key={n} className={`mobile-link${n === "Contact Us" ? " mobile-link-contact" : ""}`} onClick={() => go(n)}>{n}</button>
        ))}
      </div>
    </>
  );
}

export { Nav };
