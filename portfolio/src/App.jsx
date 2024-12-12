import Bio from "./Components/Bio";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import WorkExperience from "./Components/WorkExperience";

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
