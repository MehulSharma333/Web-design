import Connections from "./Components/Connections";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import InTouch from "./Components/InTouch";
import Intiutive from "./Components/Intiutive";
import LastSection from "./Components/LastSection";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Summary from "./Components/Summary";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Summary />
      <InTouch />
      <Experience />
      <Intiutive />
      <Connections />
      <Slider />
      <LastSection />
      <Footer />
    </>
  );
}
