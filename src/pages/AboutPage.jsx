import { TEAM } from "../data/siteData.jsx";
import { LogoMark } from "../components/Logo.jsx";

function AboutPage({ setPage }) {
  return (
    <div className="page page-standard">
      <section className="section">
        <div className="container">
          <div className="about-split">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-h2">Built by <span>Technologists</span>,<br />for Businesses</h2>
              <p style={{ color: "var(--muted)", marginBottom: 20, lineHeight: 1.8 }}>
                DigitWise LLC was founded by professionals who believed technology should be an enabler — not a bottleneck. Based in Miami, FL, we serve clients across industries with a commitment to practical, impactful IT solutions.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
                Our mission is to democratize access to enterprise-grade technology expertise. Whether you're a startup scaling fast or an established company modernizing your stack, we're the partner that grows with you.
              </p>
              <div className="about-stats">
                {[["50+", "Clients Served"], ["8", "Core Services"], ["3", "Co-founders"], ["24/7", "Support"]].map(([n, l]) => (
                  <div className="stat-card" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">
              <div className="orbit animate-float" style={{ width: 280, height: 280 }}>
                <div className="orbit-dot" />
              </div>
              <div className="orbit" style={{ width: 200, height: 200, animationDirection: "reverse", animationDuration: "14s" }}>
                <div className="orbit-dot" style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
              </div>
              <div className="about-logo-big">
                <LogoMark size={80} />
                <div className="about-logo-name">DigitWise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: "var(--bg2)", borderTop: "1px solid var(--card-border)" }}>
        <div className="container">
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>The People</div>
            <h2 className="section-h2" style={{ textAlign: "center" }}>Meet the <span>Team</span></h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>The minds behind DigitWise — united by a passion for technology and a drive to deliver results.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <div className="team-card" key={m.name}>
                <div className="team-card-header">
                  <div className="team-person">
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                  </div>
                </div>
                <div className="team-bio">{m.bio}</div>
                <div className="team-action">
                  {m.profileUrl ? (
                    <a className="team-link" href={m.profileUrl} target="_blank" rel="noopener noreferrer" aria-label={`${m.linkLabel} for ${m.name}`}>
                      {m.linkLabel}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="team-link-spacer" aria-hidden="true" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn-primary" onClick={() => { setPage("Contact Us"); window.scrollTo({ top: 0 }); }}>Work With Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export { AboutPage };
