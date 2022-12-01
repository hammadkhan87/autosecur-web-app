import Hero from "../components/Hero";
import About from "../components/About";
import IndustrySector from "../components/IndustrySector";
import AutosecureEcosystem from "../components/AutosecureEcosystem";
import AutosecureValues from "../components/AutosecureValues";
import Achievements from "../components/Achievements";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <IndustrySector />
      <AutosecureEcosystem />
      <AutosecureValues />
      <Achievements />
    </>
  );
};

export default Home;
