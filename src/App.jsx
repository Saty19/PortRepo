
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


import "./App.css";
import SectionSecond from "./components/Section2/SectionSecond";
import About from "./components/About/About";
import PhysicsDemo from "./components/Product/PhysicsDemo";
const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <SectionSecond /> {/* SectionSecond is loaded and ready to use */}
        <PhysicsDemo/>
        <About/>
      </div>
    </div>
  );
};

export default App;
