
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { services, courses } from "./data/services";
import "./index.css";

const faqs = [
  {
    question: "Do you offer computer training online and physically?",
    answer:
      "Yes. We offer physical and online training options. Contact us to discuss available courses, schedules and your learning goals.",
  },
  {
    question: "Can SALFA develop a website for my company?",
    answer:
      "Yes. We can discuss business websites, e-commerce platforms, web applications and mobile app projects based on your requirements.",
  },
  {
    question: "Can I request computer repair services?",
    answer:
      "Yes. Describe your device and its problem using our inquiry form. We will use your inquiry to discuss the next steps for technical support.",
  },
  {
    question: "Can you assist with university and job applications?",
    answer:
      "We provide guidance with eligible online applications. Requirements and deadlines depend on the relevant institution or service.",
  },
  {
    question: "How can I get a quotation for my project?",
    answer:
      "Select the relevant service in the contact form and describe your requirements. We can then discuss the project scope and quotation.",
  },
];

const filters = [
  { label: "All services", value: "all" },
  { label: "Training", value: "training" },
  { label: "Development", value: "development" },
  { label: "Technical support", value: "technical" },
  { label: "Business & digital", value: "other" },
];

function App() {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [courseFilter, setCourseFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredServices = services.filter((service) => {
    if (serviceFilter === "all") return true;
    if (serviceFilter === "other") {
      return ["digital", "consulting"].includes(service.category);
    }
    return service.category === serviceFilter;
  });

  const filteredCourses = courses.filter((course) => {
    if (courseFilter === "all") return true;
    return course.category === courseFilter;
  });

  return (
    <>
      <div className="announcement">
        <span className="status-dot" />
        DIGITAL SKILLS. SMART SOLUTIONS. REAL OPPORTUNITIES.
        <a href="#services">
          Discover SALFA <ArrowUpRight size={14} />
        </a>
      </div>

      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              YOUR DIGITAL BUSINESS PARTNER
            </div>

            <h1>
              Think digital.
              <br />
              Build <span>without limits.</span>
            </h1>

            <p className="hero-description">
              We empower people and businesses through computer training,
              technical support, software development and professional
              digital services.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#services">
                Explore our services <ArrowRight size={18} />
              </a>
              <a className="button-outline" href="#courses">
                <GraduationCap size={19} /> Start learning
              </a>
            </div>

            <div className="hero-assurance">
              <span className="assurance-icon">
                <ShieldCheck size={21} />
              </span>
              <div>
                <strong>Practical technology for real needs</strong>
                <span>Learn, build, repair and grow with SALFA.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="code-panel">
              <div className="code-panel-header">
                <div className="window-dots">
                  <i /><i /><i />
                </div>
                <span>salfa / digital-studio</span>
                <span className="panel-live">● LIVE IDEAS</span>
              </div>

              <div className="code-panel-body">
                <span className="code-caption">
                  <Sparkles size={15} /> A BETTER DIGITAL FUTURE
                </span>

                <div className="code-block">
                  <p><span>01</span> <b>const</b> salfa = {"{"}</p>
                  <p><span>02</span> &nbsp; skills: <em>"Empower"</em>,</p>
                  <p><span>03</span> &nbsp; ideas: <em>"Build"</em>,</p>
                  <p><span>04</span> &nbsp; future: <em>"Innovate"</em></p>
                  <p><span>05</span> {"}"}</p>
                </div>

                <div className="code-result">
                  <CheckCircle2 size={17} />
                  <span>Ready to transform your ideas</span>
                </div>

                <div className="visual-stat-grid">
                  <div>
                    <Code2 size={22} />
                    <span>DEVELOPMENT</span>
                    <strong>Digital products</strong>
                  </div>
                  <div>
                    <GraduationCap size={23} />
                    <span>EDUCATION</span>
                    <strong>Practical skills</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-label floating-label-top">
              <span><Zap size={20} /></span>
              <div>
                <strong>Smart technology</strong>
                <small>Solutions for your goals</small>
              </div>
            </div>

            <div className="floating-label floating-label-bottom">
              <span><GraduationCap size={21} /></span>
              <div>
                <strong>Learn & grow</strong>
                <small>Your skills matter</small>
              </div>
            </div>

            <div className="hero-visual-caption">
              <span /> TECHNOLOGY THAT MOVES YOU FORWARD
            </div>
          </div>

          <a href="#services" className="scroll-cue">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="expertise-strip">
          <span>OUR FOCUS</span>
          <span><Code2 size={17} /> SOFTWARE</span>
          <span><GraduationCap size={18} /> EDUCATION</span>
          <span><ShieldCheck size={17} /> TECH SUPPORT</span>
          <span><Sparkles size={17} /> BUSINESS GROWTH</span>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> WHAT WE DO
              </div>
              <h2>
                Your goals.
                <br />
                <span>Our digital expertise.</span>
              </h2>
            </div>

            <p>
              Explore our services and find the right support for your
              learning journey, technology needs or business ambitions.
            </p>
          </div>

          <div className="filter-bar" aria-label="Filter services">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={
                  serviceFilter === filter.value
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setServiceFilter(filter.value)}
                aria-pressed={serviceFilter === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="section-bottom-note">
            <CheckCircle2 size={18} />
            <span>Not sure what you need? Contact us and explain your goals.</span>
            <a href="#contact">Talk to SALFA <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="learning-section" id="courses">
          <div className="learning-inner">
            <div className="learning-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" /> SALFA LEARNING
              </div>

              <h2>
                Learn today.
                <br />
                <span>Create tomorrow.</span>
              </h2>

              <p>
                Develop valuable digital skills through practical learning,
                flexible training formats and projects that build your
                confidence.
              </p>

              <div className="learning-benefits">
                <div><CheckCircle2 size={18} /> Physical & online learning</div>
                <div><CheckCircle2 size={18} /> Beginner to practical development</div>
                <div><CheckCircle2 size={18} /> Skills for work and business</div>
              </div>

              <a href="#contact" className="button-primary">
                Ask about courses <ArrowRight size={18} />
              </a>
            </div>

            <div className="course-catalogue">
              <div className="catalogue-heading">
                <div>
                  <span className="eyebrow">EXPLORE COURSES</span>
                  <h3>Build your skills</h3>
                </div>

                <span className="catalogue-count">
                  {filteredCourses.length} courses
                </span>
              </div>

              <div className="course-filters">
                {[
                  { label: "All courses", value: "all" },
                  { label: "Beginner", value: "beginner" },
                  { label: "Professional", value: "professional" },
                  { label: "Development", value: "development" },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={
                      courseFilter === filter.value ? "active" : ""
                    }
                    onClick={() => setCourseFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="course-list">
                {filteredCourses.map((course, index) => {
                  const Icon = course.icon;

                  return (
                    <article className="course-card" key={course.id}>
                      <div className="course-icon">
                        <Icon size={24} />
                      </div>

                      <div className="course-info">
                        <span className="course-number">
                          COURSE 0{index + 1}
                        </span>
                        <h4>{course.title}</h4>
                        <p>{course.description}</p>

                        <div className="course-meta">
                          <span>{course.mode}</span>
                          <span>{course.duration}</span>
                        </div>

                        <a href="#contact" className="course-enquire">
                          Enquire about this course <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </article>
                  );
                })}

                {filteredCourses.length === 0 && (
                  <p className="empty-state">
                    No courses are currently listed in this category.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-art">
            <div className="about-art-grid">
              <div><Code2 size={32} /><strong>DEVELOP</strong></div>
              <div><GraduationCap size={32} /><strong>EDUCATE</strong></div>
              <div><ShieldCheck size={32} /><strong>SUPPORT</strong></div>
              <div><Sparkles size={32} /><strong>EMPOWER</strong></div>
            </div>
            <span className="about-watermark">SALFA.</span>
          </div>

          <div className="about-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> ABOUT OUR PLATFORM
            </div>

            <h2>
              Technology creates
              <br />
              <span>new opportunities.</span>
            </h2>

            <p>
              SALFA DIGITAL SOLUTION brings digital education, technical
              support, software development and business guidance together
              in one accessible platform.
            </p>

            <p>
              Our goal is to help individuals improve their digital skills
              and help businesses use technology to solve real problems.
            </p>

            <div className="about-points">
              <div><CheckCircle2 size={19} /> Practical, customer-focused services</div>
              <div><CheckCircle2 size={19} /> Learning options for different skill levels</div>
              <div><CheckCircle2 size={19} /> Technology solutions shaped around your needs</div>
            </div>

            <a href="#contact" className="text-link">
              Let's discuss your goals <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="faq-section section" id="faq">
          <div className="faq-heading">
            <div className="eyebrow">
              <span className="eyebrow-line" /> HAVE QUESTIONS?
            </div>
            <h2>
              Good questions.
              <br />
              <span>Clear answers.</span>
            </h2>
            <p>
              Find out more about our services, training and how to get started.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const expanded = openFaq === index;

              return (
                <article
                  className={`faq-item ${expanded ? "expanded" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpenFaq(expanded ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={20} />
                  </button>

                  {expanded && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-glow" />
          <div className="cta-content">
            <div className="eyebrow">
              <span className="eyebrow-line" /> YOUR NEXT STEP
            </div>
            <h2>
              Your idea deserves
              <br />
              <span>a digital future.</span>
            </h2>
            <p>
              Let's talk about the skill you want to learn, the problem you
              want to solve or the digital product you want to build.
            </p>
            <a href="#contact" className="button-primary">
              Start a conversation <ArrowRight size={18} />
            </a>
          </div>
          <Zap className="cta-decoration" size={140} strokeWidth={0.8} />
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> CONTACT SALFA
            </div>

            <h2>
              Let's build
              <br />
              <span>something valuable.</span>
            </h2>

            <p>
              Share your requirements with us. Whether you need training,
              repairs, development, online application assistance or business
              advice, we can discuss your next steps.
            </p>

            <div className="contact-highlight">
              <span><CheckCircle2 size={23} /></span>
              <div>
                <strong>One platform. Six service areas.</strong>
                <p>Tell us what you need and we'll direct your inquiry.</p>
              </div>
            </div>

            <div className="contact-highlight">
              <span><ShieldCheck size={23} /></span>
              <div>
                <strong>Clear and practical support</strong>
                <p>We discuss your requirements before starting the work.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
