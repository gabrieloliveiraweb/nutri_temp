import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBar } from "./components/MarqueeBar";
import { Benefits } from "./components/Benefits";
import { Services } from "./components/Services";
import { Methodology } from "./components/Methodology";
import { CTA } from "./components/CTA";
import { Testimonials } from "./components/Testimonials";
import { Steps } from "./components/Steps";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#E8A598]/30">
      <Navbar />
      <Hero />
      <MarqueeBar />
      <Benefits />
      <Services />
      <Methodology />
      <CTA />
      <Testimonials />
      <Steps />
      <About />
      <Footer />
    </div>
  );
}
