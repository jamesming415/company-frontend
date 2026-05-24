import { useState } from "react";
import { SERVICES } from "../data/siteData.jsx";
import { Icon } from "../components/Icon.jsx";

function ServicesPage({ setPage }) {
  const [activeFilter, setActiveFilter] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveFilter(id);
  };

  return (
    <div className="page page-standard">
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="section-label">What We Offer</div>
            <h2 className="section-h2">Our <span>Services</span></h2>
            <p className="section-sub">Comprehensive IT solutions designed to help your business innovate, scale, and secure its future.</p>
          </div>
          <div className="services-nav">
            {SERVICES.map((s) => (
              <button key={s.id} className={`services-nav-btn${activeFilter === s.id ? " active" : ""}`} onClick={() => scrollTo(s.id)}>
                <Icon name={s.icon} size={16} strokeWidth={2} /> {s.title}
              </button>
            ))}
          </div>

          {SERVICES.map((s, i) => (
            <div key={s.id} id={s.id} className="service-section">
              <div className="service-section-text">
                <div className="service-section-icon">
                  <Icon name={s.icon} size={38} />
                </div>
                <h3 className="service-section-title">{s.title}</h3>
                <p className="service-section-desc">{s.desc}</p>
                <button className="btn-primary" onClick={() => { setPage("Contact Us"); window.scrollTo({ top: 0 }); }}>
                  {s.cta}
                </button>
              </div>
              <div className="service-section-visual">
                <img
                  className="service-section-image"
                  src={s.image}
                  alt={`${s.title} service`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 900px) 90vw, 46vw"
                />
                <div className="service-section-image-label">
                  <Icon name={s.icon} size={18} strokeWidth={2} />
                  <span>{s.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export { ServicesPage };
