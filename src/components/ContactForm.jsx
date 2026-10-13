
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Mail } from "lucide-react";
import { services } from "../data/services";

const WHATSAPP_NUMBER = "255616161452";
const BUSINESS_EMAIL = "abourumaysah@gmail.com";

export default function ContactForm() {
  const [service, setService] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    function selectService(event) {
      setService(event.detail.service);
      setFeedback("");
    }

    window.addEventListener("salfa:select-service", selectService);

    return () => {
      window.removeEventListener("salfa:select-service", selectService);
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const selectedService = data.get("service");
    const userMessage = data.get("message");

    const message = [
      "Hello SALFA DIGITAL SOLUTION!",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${selectedService}`,
      `Message: ${userMessage}`,
      "",
      `Business Email: ${BUSINESS_EMAIL}`,
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setFeedback(
      "Your inquiry is ready. Please send the prepared message in WhatsApp."
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">LET'S WORK TOGETHER</span>
        <h3>Tell us about your needs.</h3>
        <p>
          Contact SALFA DIGITAL SOLUTION for professional digital
          services and business support.
        </p>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Full name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-service">Service required</label>
        <select
          id="contact-service"
          name="service"
          value={service}
          onChange={(event) => {
            setService(event.target.value);
            setFeedback("");
          }}
          required
        >
          <option value="">Choose a service</option>

          {services.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us what you would like us to help you with..."
          required
        />
      </div>

      <button className="button-primary form-submit" type="submit">
        Send inquiry on WhatsApp
        <MessageCircle size={18} />
      </button>

      {feedback && (
        <p className="form-feedback" role="status">
          <CheckCircle2 size={17} />
          {feedback}
        </p>
      )}

      <div className="form-note">
        <p>
          <MessageCircle size={16} />
          WhatsApp: +255 616 161 452
        </p>

        <p>
          <Mail size={16} />
          Email: {BUSINESS_EMAIL}
        </p>

        <p>
          Your inquiry opens in WhatsApp. Database storage will be
          implemented when the backend is connected.
        </p>
      </div>
    </form>
  );
}
