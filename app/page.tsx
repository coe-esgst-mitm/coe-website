import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import CentreCoordinators from "@/components/CentreCoordinators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FocusAreas />
      <CentreCoordinators />
      <Contact />
      <Footer />
    </>
  );
}