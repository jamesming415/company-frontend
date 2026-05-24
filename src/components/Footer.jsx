import { EmailLink } from "./EmailLink.jsx";
import { SERVICES } from "../data/siteData.jsx";
import { LogoMark } from "./Logo.jsx";

function Footer({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <LogoMark size={36} />
              <span style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.2rem", color: "var(--text)" }}>DigitWise LLC</span>
            </div>
            <p className="footer-tagline">
              If the world offers no new opportunities, create your own.<br />
              Miami, FL · digitwise.org
            </p>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            {["Home", "About", "Services", "Contact Us"].map((p) => (
              <button key={p} className="footer-link" onClick={() => go(p)}>{p}</button>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            {SERVICES.slice(0, 4).map((s) => (
              <button key={s.id} className="footer-link" onClick={() => { go("Services"); setTimeout(() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "center" }), 100); }}>{s.title}</button>
            ))}
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <EmailLink className="footer-link" />
            <p className="footer-link" style={{ cursor: "default" }}>+1 (407) 801-9640</p>
            <p className="footer-link" style={{ cursor: "default" }}>2125 Biscayne Blvd, Ste 204</p>
            <p className="footer-link" style={{ cursor: "default" }}>Miami, FL 33137</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} DigitWise LLC. All rights reserved.</span>
          <span className="footer-copy">digitwise.org</span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
