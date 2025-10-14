import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="absolute h-screen bg-linear-to-b from-90% to-[#262622] opacity-65 top-0 left-0 right-0 bottom-0"></div>
      <div className="h-screen max-w-screen bg-cover bg-center bg-[url(/assets/bg-cloud.jpg)]">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
