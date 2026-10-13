
import { useState } from "react";
import { ArrowUpRight, Menu, X, Zap } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Training", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-icon">
          <Zap size={24} fill="currentColor" />
        </span>

        <span className="brand-text">
          <strong>SALFA</strong>
          <small>DIGITAL SOLUTION</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav className={`nav-links ${open ? "nav-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}

        <a
          className="nav-button"
          href="#contact"
          onClick={closeMenu}
        >
          Get a quote <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
