import { useState } from "react";
import { EmailLink } from "../components/EmailLink.jsx";
import { Icon } from "../components/Icon.jsx";

const API_BASE_URL = "https://company-backend-w6y3.onrender.com";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handle = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Message could not be sent right now.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Message could not be sent right now.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page page-standard contact-page">
      <section className="section">
        <div className="container">
          <div className="contact-heading">
            <div className="section-label">Contact Us</div>
            <h2 className="section-h2">Let's <span>Connect</span></h2>
            <p className="section-sub contact-intro">Have a project in mind or a question about our services? We'd love to hear from you.</p>
          </div>
          <div className="contact-grid">
            <div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><Icon name="mapPin" size={20} /></div>
                <div>
                  <div className="contact-info-label">Office</div>
                  <div className="contact-info-val">2125 Biscayne Blvd, Ste 204<br />Miami, FL 33137</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><Icon name="phone" size={20} /></div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-val">+1 (407) 801-9640</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><Icon name="mail" size={20} /></div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <EmailLink className="contact-info-val contact-email-link" />
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><Icon name="website" size={20} /></div>
                <div>
                  <div className="contact-info-label">Website</div>
                  <div className="contact-info-val">digitwise.org</div>
                </div>
              </div>

            </div>
            <div className="contact-form">
              <h3 className="contact-form-title">Send us a Message</h3>
              {sent ? (
                <div className="form-success">
                  <Icon name="check" size={18} strokeWidth={2.2} /> Message sent! We'll get back to you within 24 hours.
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name *</label>
                      <input className="form-input" name="name" value={form.name} onChange={handle} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" name="message" value={form.message} onChange={handle} placeholder="Tell us about your project or inquiry..." required />
                  </div>
                  {error ? <div className="form-error" role="alert">{error}</div> : null}
                  <button type="submit" className="btn-primary contact-submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { ContactPage };
