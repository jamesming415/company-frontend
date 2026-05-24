function HomePage({ setPage }) {
  return (
    <div className="page page-home">
      {/* HERO */}
      <section className="hero">
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1758873267964-66a045a75e25?auto=format&fit=crop&fm=jpg&q=82&w=2400"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <h1 className="hero-h1">
            If the world offers<br />
            <span>no new opportunities,</span><br />
            create your own.
          </h1>
          <p className="hero-sub">DigitWise helps startups and growing teams build practical technology foundations, automate operations, strengthen security, and move faster with confidence.</p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section-sm" style={{ background: "var(--bg3)", borderTop: "1px solid var(--card-border)", borderBottom: "1px solid var(--card-border)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 6 }}>Ready to transform your IT?</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>Let's discuss what DigitWise can do for your organization.</p>
          </div>
          <button className="btn-primary" onClick={() => { setPage("Contact Us"); window.scrollTo({ top: 0 }); }}>Start a Conversation →</button>
        </div>
      </section>
    </div>
  );
}

export { HomePage };
