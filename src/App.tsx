import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Benefits />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
