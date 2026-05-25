import { SERVICES, WHAT_WE_HAVE_DONE } from "../data/siteData.jsx";
import { Icon } from "../components/Icon.jsx";
import { ServiceCard } from "../components/ServiceCard.jsx";

function ServicesPage({ setPage }) {
  const goToContact = () => {
    setPage("Contact Us");
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="page page-standard">
      <section className="section services-proof-section">
        <div className="container">
          <div className="proof-section">
            <div className="proof-heading">
              <div className="section-label">Proof of Work</div>
              <h3 className="proof-title">What We Have <span>Done</span></h3>
              <p className="proof-sub">
                DigitWise is not only planning technology. We have already built real products, shipped client applications, and are developing advanced strategies for new business opportunities.
              </p>
            </div>
            <div className="proof-grid">
              {WHAT_WE_HAVE_DONE.map((item, index) => (
                <div className="proof-card" key={item.title}>
                  <div className="proof-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="proof-icon">
                    <Icon name={item.icon} size={30} />
                  </div>
                  <h4 className="proof-card-title">{item.title}</h4>
                  <p className="proof-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section services-catalog-section">
        <div className="container">
          <div className="services-catalog-heading">
            <div>
              <div className="section-label">What We Offer</div>
              <h2 className="section-h2">Our <span>Services</span></h2>
            </div>
            <p className="section-sub services-catalog-sub">Comprehensive IT solutions designed to help your business innovate, scale, and secure its future.</p>
          </div>

          <div className="services-grid services-catalog-grid">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} s={s} onLearnMore={goToContact} onContact={goToContact} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export { ServicesPage };
