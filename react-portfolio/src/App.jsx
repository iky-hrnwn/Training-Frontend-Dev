// App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import MarqueeText from "./components/MarqueeText";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-[#262622] bg-[#262622]">
      {/* Background strip */}
      <div className="absolute bg-[#F2F2EB] h-[90px] w-full"></div>

      <Navbar />
      <Hero />
      <About />
      <MarqueeText />
      <Experience />
      <Project />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
