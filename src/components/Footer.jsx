
import { ArrowUpRight, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand footer-brand">
        <span className="brand-icon">
          <Zap size={22} fill="currentColor" />
        </span>
        <span className="brand-text">
          <strong>SALFA</strong>
          <small>DIGITAL SOLUTION</small>
        </span>
      </a>

      <p>Technology. Skills. Opportunity.</p>

      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#courses">Training</a>
        <a href="#contact">
          Contact <ArrowUpRight size={14} />
        </a>
      </div>

      <span className="copyright">
        © {new Date().getFullYear()} SALFA DIGITAL SOLUTION
      </span>
    </footer>
  );
}
