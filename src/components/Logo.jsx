import { memo } from "react";

function LogoMarkComponent({ size = 36 }) {
  const gradientId = `dw-logo-gradient-${size}`;
  const shineId = `dw-logo-shine-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="3" y1="3" x2="33" y2="33" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0b5ff0"/>
          <stop offset="55%" stopColor="#1a6cf6"/>
          <stop offset="100%" stopColor="#00c2ff"/>
        </linearGradient>
        <radialGradient id={shineId} cx="0" cy="0" r="1" gradientTransform="matrix(18 19 -19 18 11 8)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.38"/>
          <stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="32" height="32" rx="10" fill={`url(#${gradientId})`} />
      <rect x="2" y="2" width="32" height="32" rx="10" fill={`url(#${shineId})`} />
      <rect x="2.75" y="2.75" width="30.5" height="30.5" rx="9.25" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
      <path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 8.5h8.9c6 0 10.1 3.9 10.1 9.5s-4.1 9.5-10.1 9.5H9v-19Zm5.7 5v9h3.1c2.9 0 4.7-1.8 4.7-4.5s-1.8-4.5-4.7-4.5h-3.1Z"
      />
      <path
        d="M16.1 23.1 18.6 18l2.4 5.1 4.3-9.2"
        stroke="#7ee7ff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26.4" cy="12.1" r="1.35" fill="#b9f4ff" />
    </svg>
  );
}

const LogoMark = memo(LogoMarkComponent);

function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="nav-logo" type="button">
      <div className="nav-logo-icon"><LogoMark size={54} /></div>
      <span className="nav-logo-text">
        <span className="nav-logo-word">
          <span>Digit</span>
          <span>Wise</span>
        </span>
        <span className="nav-logo-tagline">Startup IT Consulting & Digital Operations</span>
      </span>
    </button>
  );
}

export { Logo, LogoMark };
