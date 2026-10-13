
import {
  ArrowRight, Code2, Smartphone, Monitor,
  ShieldCheck, Sparkles
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <div className="eyebrow">
          <Sparkles size={15} />
          YOUR PARTNER IN DIGITAL GROWTH
        </div>

        <h1>
          Transform Your Ideas Into{" "}
          <span>Digital Solutions.</span>
        </h1>

        <p className="hero-description">
          From professional websites and mobile apps to technology
          products, online applications and business consultancy,
          SALFA helps turn your ideas into real opportunities.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#services">
            Explore Our Services <ArrowRight size={18} />
          </a>
          <a className="btn btn-outline" href="#contact">
            Talk to Our Team
          </a>
        </div>

        <div className="hero-trust">
          <ShieldCheck size={19} />
          <span>Reliable service. Practical solutions. Business growth.</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="tech-core">
          <div className="core-icon"><Code2 size={52} /></div>
          <h3>SALFA TECH</h3>
          <p>Innovate. Build. Grow.</p>
        </div>

        <div className="floating-card floating-top">
          <div className="float-icon cyan"><Monitor /></div>
          <div><strong>Web Development</strong><small>Modern digital experiences</small></div>
        </div>

        <div className="floating-card floating-bottom">
          <div className="float-icon purple"><Smartphone /></div>
          <div><strong>Smart Technology</strong><small>Solutions for your business</small></div>
        </div>

        <div className="hero-glow"></div>
      </div>

      <div className="hero-bottom">
        <span>WHAT WE DO</span>
        <span className="hero-line"></span>
        <span>TECHNOLOGY · SERVICES · GROWTH</span>
      </div>
    </section>
  );
}
