import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    name: "LankaMart",
    industry: "Retail / E-Commerce",
    type: "Web Application",
    description:
      "A full-featured online marketplace with multi-vendor support, secure payments and a powerful admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    result: "Increased online orders by 30% in 3 months",
    image:
      "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100080678/project_ecommerce_887fcc2b.png",
  },
  {
    name: "QuickBite",
    industry: "Food &amp; Beverage",
    type: "Mobile App",
    description:
      "iOS & Android food delivery app with real-time order tracking, driver app and merchant dashboard.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    result: "10,000+ active users in first quarter",
    image:
      "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100080678/project_fooddelivery_27a20ebc.png",
  },
  {
    name: "RetailPro POS",
    industry: "Retail",
    type: "Custom POS / ERP",
    description:
      "End-to-end Point of Sale and inventory management system used across 25+ retail outlets island-wide.",
    tech: ["Laravel", "Vue", "MySQL"],
    result: "Reduced stock errors by 80%",
    image:
      "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100080678/project_pos_ac5bc3fe.png",
  },
  {
    name: "EduSpark LMS",
    industry: "Education",
    type: "Web Application",
    description:
      "A learning management system with video lessons, quizzes, certificates and live class integration.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    result: "Onboarded 5,000+ students",
    image:
      "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100080678/project_lms_180e0eaa.png",
  },
  {
    name: "NovaPay",
    industry: "Finance",
    type: "Mobile App",
    description:
      "A secure mobile wallet with bill payments, transfers and biometric authentication.",
    tech: ["React Native", "Node.js", "MongoDB"],
    result: "PCI-compliant and SOC2 ready",
    image:
      "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100080678/project_finance_82181007.png",
  },
  {
    name: "Ceylon Homes",
    industry: "Real Estate",
    type: "Web Platform",
    description:
      "A modern property listing platform with map-based search, agent profiles and inquiry management.",
    tech: ["React", "Laravel", "Mapbox"],
    result: "3x increase in qualified leads",
    image:
      "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100080678/project_realestate_b94a8da2.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative bg-background py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Featured Work
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Projects we are <span className="text-gradient">proud of.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of the products we&apos;ve shipped for businesses across
            industries.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`reveal reveal-delay-${(i % 4) + 1} group overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-elegant`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  crossOrigin="anonymous"
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-deep backdrop-blur">
                  {p.type}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider text-primary"
                      dangerouslySetInnerHTML={{ __html: p.industry }}
                    />
                    <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                      {p.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-primary/10 p-2 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  {p.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
