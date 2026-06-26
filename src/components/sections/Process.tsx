import { MessagesSquare, PenTool, Code2, TestTube2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "Discovery",
    desc: "We listen, ask the right questions and document your requirements clearly.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Wireframes &amp; high-fidelity UI in Figma — approved before a single line of code.",
  },
  {
    icon: Code2,
    title: "Develop",
    desc: "Agile sprints with weekly demos so you always see real progress.",
  },
  {
    icon: TestTube2,
    title: "Test",
    desc: "Manual &amp; automated QA across devices to ensure rock-solid quality.",
  },
  {
    icon: Rocket,
    title: "Launch &amp; Support",
    desc: "Smooth deployment plus continuous monitoring and feature updates.",
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      className="relative bg-gradient-to-b from-background to-secondary/40 py-20 lg:py-28"
    >
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            How We Work
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A simple, transparent{" "}
            <span className="text-gradient">5-step process.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${(i % 5) + 1} relative text-center`}
              >
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-primary-deep text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="mt-5 font-display text-base font-semibold text-foreground"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  className="mt-2 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
