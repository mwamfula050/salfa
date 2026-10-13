
import {
  Target,
  Lightbulb,
  Handshake,
  CheckCircle2,
  ShieldCheck,
  Laptop,
  Users,
  TrendingUp,
  Headset,
  Globe,
  Rocket,
  ArrowRight,
  Eye,
  HeartHandshake,
  BadgeCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Customer Focus",
    text: "We listen carefully, understand your goals, and recommend practical solutions that fit your needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace modern technology to simplify everyday tasks and create smarter ways of working.",
  },
  {
    icon: Handshake,
    title: "Trust & Integrity",
    text: "We value honesty, transparency, responsible service, and respect for customer privacy.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    text: "We keep learning and improving so we can deliver relevant digital solutions as your needs evolve.",
  },
];

const benefits = [
  {
    icon: Laptop,
    title: "Digital Expertise",
    text: "Practical IT assistance, digital solutions, and technology support for individuals and businesses.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    text: "We take time to understand each customer and provide guidance suited to their requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Support",
    text: "We aim to handle customer information carefully and approach every task professionally.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    text: "We help businesses explore digital tools that can improve productivity and everyday operations.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Headset,
    title: "Tell Us Your Needs",
    text: "Explain the service you need or the challenge you want to solve.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Get the Right Guidance",
    text: "We discuss suitable options, requirements, and the next steps.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Move Forward",
    text: "We work with you toward a practical solution and provide guidance where needed.",
  },
];

export default function About() {
  return (
    <main className="salfa-about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow about-glow-one" />
        <div className="about-hero-glow about-glow-two" />

        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <span className="eyebrow">
              <Sparkles size={15} />
              GET TO KNOW SALFA
            </span>

            <h1>
              We Turn Digital
              <br />
              Possibilities Into
              <br />
              <span>Real Solutions.</span>
            </h1>

            <p>
              SALFA DIGITAL SOLUTIONS connects people and businesses
              with technology, online services, and practical digital
              support to help them move forward with confidence.
            </p>

            <div className="about-hero-actions">
              <a href="#our-story" className="about-btn about-btn-primary">
                Discover Our Story <ArrowRight size={18} />
              </a>

              <a href="#about-contact" className="about-btn about-btn-outline">
                Let's Talk
              </a>
            </div>

            <div className="about-hero-note">
              <span className="about-note-icon">
                <CheckCircle2 size={18} />
              </span>
              <span>Technology. Service. Opportunity.</span>
            </div>
          </div>

          <div className="about-hero-art">
            <div className="about-orbit orbit-one" />
            <div className="about-orbit orbit-two" />

            <div className="about-main-card">
              <div className="about-card-top">
                <div className="about-brand-mark">
                  <Globe size={28} />
                </div>
                <span className="about-status">
                  <span className="about-status-dot" />
                  DIGITAL SOLUTIONS
                </span>
              </div>

              <div className="about-art-heading">
                <span>YOUR DIGITAL PARTNER</span>
                <h3>Smarter ways to work and grow.</h3>
              </div>

              <div className="about-art-grid">
                <div className="about-art-tile">
                  <Laptop size={25} />
                  <span>Technology</span>
                </div>
                <div className="about-art-tile">
                  <Globe size={25} />
                  <span>Online Services</span>
                </div>
                <div className="about-art-tile">
                  <TrendingUp size={25} />
                  <span>Business Growth</span>
                </div>
                <div className="about-art-tile">
                  <HeartHandshake size={25} />
                  <span>Customer Care</span>
                </div>
              </div>

              <div className="about-art-footer">
                <span className="about-footer-line" />
                <span>BUILT AROUND YOUR NEEDS</span>
              </div>
            </div>

            <div className="about-floating-card floating-card-top">
              <span className="about-floating-icon">
                <ShieldCheck size={21} />
              </span>
              <div>
                <strong>Trust First</strong>
                <small>Responsible service</small>
              </div>
            </div>

            <div className="about-floating-card floating-card-bottom">
              <span className="about-floating-icon">
                <Rocket size={21} />
              </span>
              <div>
                <strong>Move Forward</strong>
                <small>Digital opportunities</small>
              </div>
            </div>
          </div>
        </div>

        <div className="about-hero-bottom">
          <span>INNOVATION</span>
          <span className="about-bottom-dot" />
          <span>RELIABILITY</span>
          <span className="about-bottom-dot" />
          <span>GROWTH</span>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="about-story section" id="our-story">
        <div className="about-story-visual">
          <div className="about-story-frame">
            <div className="about-story-decoration decoration-one" />
            <div className="about-story-decoration decoration-two" />

            <div className="about-story-center">
              <div className="about-story-logo">
                <Lightbulb size={43} />
              </div>
              <span>THE SALFA APPROACH</span>
              <h3>Technology With a Purpose.</h3>
              <p>
                Connecting people to useful digital solutions and
                opportunities.
              </p>
            </div>

            <div className="about-story-tag tag-top">
              <CheckCircle2 size={16} /> Practical Solutions
            </div>

            <div className="about-story-tag tag-bottom">
              <HeartHandshake size={16} /> People First
            </div>
          </div>
        </div>

        <div className="about-story-content">
          <span className="eyebrow">WHO WE ARE</span>
          <h2>
            More Than Technology.
            <span> We're Your Partner.</span>
          </h2>

          <p>
            SALFA DIGITAL SOLUTIONS is a technology and business
            services platform focused on helping individuals and
            organizations access useful digital tools, online services,
            and practical support.
          </p>

          <p>
            We understand that technology can sometimes feel complicated.
            Our goal is to make digital services easier to understand
            and more accessible by offering clear guidance, responsive
            assistance, and solutions tailored to different needs.
          </p>

          <p>
            Whether you need help with an online application, technology
            support, or digital tools for your business, we aim to make
            your experience simpler, more convenient, and more productive.
          </p>

          <div className="about-story-points">
            <div>
              <CheckCircle2 size={19} />
              <span>Clear communication and guidance</span>
            </div>
            <div>
              <CheckCircle2 size={19} />
              <span>Practical, customer-focused solutions</span>
            </div>
            <div>
              <CheckCircle2 size={19} />
              <span>Professional and responsible service</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-purpose section">
        <div className="about-section-heading">
          <span className="eyebrow">OUR DIRECTION</span>
          <h2>
            Guided by Purpose.
            <span> Driven by Possibility.</span>
          </h2>
          <p>
            The principles that guide how we serve our customers and
            approach digital transformation.
          </p>
        </div>

        <div className="about-purpose-grid">
          <article className="about-purpose-card">
            <div className="about-purpose-icon">
              <Target size={28} />
            </div>
            <span className="about-card-label">01 / OUR MISSION</span>
            <h3>Making Digital Services Accessible</h3>
            <p>
              To provide accessible technology assistance and practical
              digital services that help individuals and businesses
              solve problems, improve efficiency, and pursue new
              opportunities.
            </p>
            <div className="about-purpose-line" />
          </article>

          <article className="about-purpose-card purpose-card-featured">
            <div className="about-purpose-icon">
              <Eye size={28} />
            </div>
            <span className="about-card-label">02 / OUR VISION</span>
            <h3>A More Connected Digital Future</h3>
            <p>
              To become a trusted digital solutions partner recognized
              for making technology more useful, understandable, and
              accessible to the people and businesses we serve.
            </p>
            <div className="about-purpose-line" />
          </article>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values section">
        <div className="about-section-heading">
          <span className="eyebrow">WHAT WE BELIEVE IN</span>
          <h2>
            Our Values Define
            <span> How We Work.</span>
          </h2>
          <p>
            Good technology services start with strong values and
            meaningful relationships.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map(({ icon: Icon, title, text }, index) => (
            <article className="about-value-card" key={title}>
              <div className="about-value-top">
                <span className="about-value-icon">
                  <Icon size={25} />
                </span>
                <span className="about-value-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{title}</h3>
              <p>{text}</p>

              <div className="about-value-bottom">
                <span>OUR COMMITMENT</span>
                <ArrowRight size={17} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-benefits section">
        <div className="about-benefits-intro">
          <span className="eyebrow">THE SALFA DIFFERENCE</span>
          <h2>
            Why Choose
            <span> SALFA?</span>
          </h2>
          <p>
            We focus on making your digital experience easier through
            practical guidance, thoughtful service, and a commitment
            to helping you find the right way forward.
          </p>

          <a href="#about-contact" className="about-text-link">
            Let's work together <ArrowRight size={18} />
          </a>

          <div className="about-benefits-mini">
            <BadgeCheck size={22} />
            <span>
              <strong>Your needs come first.</strong>
              <small>Solutions built around your requirements.</small>
            </span>
          </div>
        </div>

        <div className="about-benefits-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="about-benefit-card" key={title}>
              <div className="about-benefit-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="about-process section">
        <div className="about-section-heading">
          <span className="eyebrow">A SIMPLE APPROACH</span>
          <h2>
            From Your Idea
            <span> to the Next Step.</span>
          </h2>
          <p>
            We aim to keep the process clear, straightforward, and
            focused on your needs.
          </p>
        </div>

        <div className="about-process-grid">
          {processSteps.map(({ number, icon: Icon, title, text }) => (
            <article className="about-process-card" key={number}>
              <div className="about-process-top">
                <span className="about-process-icon">
                  <Icon size={25} />
                </span>
                <span className="about-process-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CUSTOMER PROMISE */}
      <section className="about-promise section">
        <div className="about-promise-inner">
          <div className="about-promise-icon">
            <HeartHandshake size={34} />
          </div>

          <div className="about-promise-content">
            <span className="eyebrow">OUR CUSTOMER PROMISE</span>
            <h2>Your Goals Matter to Us.</h2>
            <p>
              Every customer has a different need. We aim to listen
              carefully, explain available options clearly, and treat
              every request with professionalism and respect.
            </p>
          </div>

          <div className="about-promise-checks">
            <div><CheckCircle2 size={18} /> Clear communication</div>
            <div><CheckCircle2 size={18} /> Customer-focused guidance</div>
            <div><CheckCircle2 size={18} /> Responsible service</div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-contact-cta section" id="about-contact">
        <div className="about-cta-glow" />

        <div className="about-cta-content">
          <span className="eyebrow">
            <Sparkles size={15} /> LET'S CONNECT
          </span>

          <h2>
            Have a Digital Challenge?
            <span> Let's Solve It Together.</span>
          </h2>

          <p>
            Tell us what you need. Let's explore how SALFA DIGITAL
            SOLUTIONS can help you take your next step.
          </p>

          <div className="about-cta-actions">
            <a href="/contact" className="about-btn about-btn-primary">
              Contact Our Team <ArrowRight size={18} />
            </a>
            <a href="/" className="about-btn about-btn-outline">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="about-cta-decoration">
          <Globe size={115} strokeWidth={0.8} />
        </div>
      </section>
    </main>
  );
}
