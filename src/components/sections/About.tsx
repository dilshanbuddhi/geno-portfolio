import { Building2, Target, ShieldCheck, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Quality First",
    desc: "Clean, scalable code with rigorous testing for every release.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent",
    desc: "Honest pricing, clear timelines and weekly progress updates.",
  },
  {
    icon: Heart,
    title: "Long-term Support",
    desc: "We stand behind every product we ship — long after launch.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative bg-background py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <Building2 className="h-3.5 w-3.5" />
            About NovaSync
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A small team obsessed with{" "}
            <span className="text-gradient">great software.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Founded in <strong className="text-foreground">2021</strong> in
            Colombo, Sri Lanka, NovaSync Tech is a product studio specializing
            in <strong className="text-foreground">web applications</strong>,
            <strong className="text-foreground"> mobile apps</strong>,
            <strong className="text-foreground"> custom POS &amp; ERP systems</strong>{" "}
            and <strong className="text-foreground">e-commerce platforms</strong>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We work with startups, SMEs and enterprises across retail,
            education, healthcare and finance — turning ideas into reliable
            digital products.
          </p>
        </div>

        <div className="reveal reveal-delay-2 grid gap-5 sm:grid-cols-1">
          {values.map((v) => (
            <div
              key={v.title}
              className="group flex gap-5 rounded-2xl border border-border bg-gradient-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                <v.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
