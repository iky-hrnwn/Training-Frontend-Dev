import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-[url(/assets/bg-cloud.jpg)] bg-gradient-to-bottom from-black from-10%">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
