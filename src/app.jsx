import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import WorkExperience from "./sections/WorkExperience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <WorkExperience />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
};

export default App;
