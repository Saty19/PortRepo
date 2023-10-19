import "./App.css";
import SectionSecond from "./components/Section2/SectionSecond";
import Service from "./components/Service/Service";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { useLayoutEffect } from "react";
import SmoothScroll from "./components/Scroll/SmoothScroll";
import Projects from "./components/Projects/Projects";
import Testimonial from "./components/Testimonials/Testimonial";



const App = () => {
  useLayoutEffect(() => {
    const handleWheelEvent = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheelEvent, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);
  return (

    <SmoothScroll>
      <div>
        <Home />
        <SectionSecond />
        <Service />
        <About />
        <Projects />
        <Testimonial />
      </div>
    </SmoothScroll>
  );
};

export default App;
