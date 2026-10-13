
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-card-top">
        <div className={`service-icon ${service.accent}`}>
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span className="service-number">{service.number}</span>
      </div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <div className="service-features">
        {service.features.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>

      <a
        className="service-action"
        href={`#contact`}
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("salfa:select-service", {
              detail: { service: service.title },
            })
          );
        }}
      >
        Explore service <ArrowUpRight size={17} />
      </a>
    </article>
  );
}
