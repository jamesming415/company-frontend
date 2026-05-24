import { useState } from "react";

const EMAIL_ADDRESS = "connect@digitwise.org";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_ADDRESS)}&su=${encodeURIComponent("")}`;

function EmailLink({ className = "" }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText(EMAIL_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span className="email-link-wrap">
      <a className={className} href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" onClick={copyEmail}>
        {EMAIL_ADDRESS}
      </a>
      {copied ? <span className="email-copy-status">Copied</span> : null}
    </span>
  );
}

export { EmailLink };
