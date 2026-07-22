import Hero from "../Hero/Hero";
import RecentProjects from "../RecentProjects/RecentProjects";
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <RecentProjects />
      <TechnicalSkills />
      <Footer />
    </>
  );
}

export default Home;