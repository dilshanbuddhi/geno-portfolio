import { useReveal } from "@/hooks/use-reveal";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Stack } from "@/components/sections/Stack";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Stack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
