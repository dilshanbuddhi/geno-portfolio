const groups = [
    {
      label: "Frontend",
      items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Laravel", ".NET", "Python", "GraphQL"],
    },
    {
      label: "Mobile",
      items: ["Flutter", "React Native", "Swift", "Kotlin"],
    },
    {
      label: "Database & Cloud",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "AWS"],
    },
    {
      label: "Tools",
      items: ["Figma", "Git", "Docker", "Jira", "Vercel"],
    },
  ];
  
  export const Stack = () => {
    return (
      <section id="stack" className="relative bg-background py-20 lg:py-28">
        <div className="container">
          <div className="reveal mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Tech Stack
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built with <span className="text-gradient">modern tools.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We pick the right tech for your problem — not the trendiest one.
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {groups.map((g, i) => (
              <div
                key={g.label}
                className={`reveal reveal-delay-${(i % 5) + 1} rounded-2xl border border-border bg-gradient-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card`}
              >
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  {g.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Stack;
  