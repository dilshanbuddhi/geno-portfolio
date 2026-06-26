import { Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Logo } from "../Logo";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-secondary/50">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-tight">
                NovaSync<span className="text-primary">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              We build modern web &amp; mobile solutions for Sri Lankan
              businesses — engineered to perform, designed to delight.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Facebook, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground/70 transition-smooth hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Get In Touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@novasync.lk</li>
              <li>+94 77 123 4567</li>
              <li>Colombo 05, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {year} NovaSync Tech. All rights reserved.</div>
          <div>Crafted with care in Sri Lanka.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
