import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import WorkExperience from "./sections/WorkExperience";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <WorkExperience />
      <TechStack/>
    </>
  );
};

export default App;
  