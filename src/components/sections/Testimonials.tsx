import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NovaSync delivered our POS system on time and exceeded every expectation. Their support has been incredible — even months after launch.",
    name: "Anushka Perera",
    company: "RetailPro Lanka",
    rating: 5,
  },
  {
    quote:
      "Professional, transparent and genuinely care about the outcome. Our mobile app went live in just 8 weeks with zero major bugs.",
    name: "Dilshan Fernando",
    company: "QuickBite",
    rating: 5,
  },
  {
    quote:
      "Beautiful UI, fast performance and great communication. They are now our long-term tech partner for everything digital.",
    name: "Nimesha Silva",
    company: "Ceylon Homes",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-b from-secondary/40 to-background py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Client Love
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What our clients <span className="text-gradient">say.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-delay-${(i % 3) + 1} relative flex flex-col rounded-2xl border border-border bg-gradient-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card`}
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex gap-0.5 text-primary">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
