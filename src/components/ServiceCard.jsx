import { Icon } from "./Icon.jsx";

function ServiceCard({ s, onLearnMore, onContact }) {
  return (
    <div className="service-card" onClick={() => s.cta === "Learn More" ? onLearnMore() : onContact()}>
      <span className="service-icon">
        <Icon name={s.icon} size={28} />
      </span>
      <div className="service-title">{s.title}</div>
      <div className="service-desc">{s.desc}</div>
      <button className="service-link" onClick={(e) => { e.stopPropagation(); s.cta === "Learn More" ? onLearnMore() : onContact(); }}>
        {s.cta} →
      </button>
    </div>
  );
}

export { ServiceCard };
