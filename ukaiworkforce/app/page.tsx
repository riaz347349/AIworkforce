import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProblemCapture from "./components/ProblemCapture";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Outcomes from "./components/Outcomes";
import CTABand from "./components/CTABand";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemCapture />
        <HowItWorks />
        <Services />
        <Outcomes />
        <CTABand
          heading="Ready to see what AI can do for you?"
          subtext="Tell us your problem in plain English — we'll handle the rest."
        />
        <Pricing />
        <CTABand
          heading="What problem can we solve for you?"
          subtext="No jargon, no hard sell. Just tell us what's slowing you down and we'll show you how AI can fix it."
        />
      </main>
      <Footer />
    </>
  );
}
