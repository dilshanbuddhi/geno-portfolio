import {
    Globe,
    Smartphone,
    ShoppingCart,
    Palette,
    LifeBuoy,
    Database,
  } from "lucide-react";
  
  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      desc: "Fast, secure and mobile-friendly websites and web apps built with React, Next.js and modern stacks.",
      tags: ["React", "Next.js", "Laravel"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Cross-platform iOS &amp; Android apps with native performance using Flutter and React Native.",
      tags: ["Flutter", "React Native"],
    },
    {
      icon: Database,
      title: "Custom ERP / POS Systems",
      desc: "Inventory, billing, accounts and reporting systems tailored to your exact business workflow.",
      tags: ["ERP", "POS", "Inventory"],
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      desc: "Beautiful, intuitive interfaces designed in Figma — backed by user research and prototyping.",
      tags: ["Figma", "Prototyping"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      desc: "Conversion-focused online stores with payment integration, analytics and inventory sync.",
      tags: ["Shopify", "WooCommerce"],
    },
    {
      icon: LifeBuoy,
      title: "Maintenance &amp; Support",
      desc: "Ongoing monitoring, security patching and feature updates — so your product never sleeps.",
      tags: ["DevOps", "24/7 Support"],
    },
  ];
  
  export const Services = () => {
    return (
      <section
        id="services"
        className="relative bg-gradient-to-b from-secondary/40 to-background py-20 lg:py-28"
      >
        <div className="container">
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              What We Do
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Services tailored to your{" "}
              <span className="text-gradient">growth.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From idea to launch — we cover the entire digital journey.
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 shadow-soft transition-smooth hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card`}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-smooth group-hover:bg-primary/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-foreground">
                  <span dangerouslySetInnerHTML={{ __html: s.title }} />
                </h3>
                <p
                  className="relative mt-2 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  