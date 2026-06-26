import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-background py-20 lg:py-28">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            Get In Touch
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">amazing together.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project — we usually reply within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <div className="reveal space-y-5 lg:col-span-2">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "hello@novasync.lk",
                href: "mailto:hello@novasync.lk",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+94 77 123 4567",
                href: "tel:+94771234567",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+94 77 123 4567",
                href: "https://wa.me/94771234567",
              },
              {
                icon: MapPin,
                label: "Office",
                value: "Colombo 05, Sri Lanka",
                href: "#",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-0.5 text-base font-medium text-foreground transition-smooth group-hover:text-primary">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-2 rounded-2xl border border-border bg-gradient-card p-8 shadow-card lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input required placeholder="John Doe" name="name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input required type="email" placeholder="you@email.com" name="email" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <label className="text-sm font-medium text-foreground">Company</label>
              <Input placeholder="Your company (optional)" name="company" />
            </div>
            <div className="mt-5 space-y-2">
              <label className="text-sm font-medium text-foreground">
                Project details
              </label>
              <Textarea
                required
                placeholder="Tell us about your idea, timeline and budget..."
                rows={5}
                name="message"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
