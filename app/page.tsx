import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import UpcomingEvents from "@/components/UpcomingEvents";
import CentreCoordinators from "@/components/CentreCoordinators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FocusAreas />
      <UpcomingEvents />
      <CentreCoordinators />
      <Contact />
      <Footer />
    </>
  );
}