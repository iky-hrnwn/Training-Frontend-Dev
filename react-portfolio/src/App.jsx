import Hero from "./components/Hero";
import About from "./components/About";
import Experiment from "./components/Experiment";

function App() {
  return (
    <section className="overflow-x-hidden text-[#262424]">
      <Hero />
      <About />
      <Experiment />
    </section>
  );
}

export default App;
