import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import SectionSecond from "./components/Section2/SectionSecond";
import Service from "./components/Service/Service";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import { useEffect } from "react";
import Projects from "./components/Projects/Projects";

const App = () => {

    useEffect(() => {
      const handleWheelEvent = (e) => {
        if (e.ctrlKey || e.metaKey) {
          // Prevent zooming with Ctrl (Windows/Linux) or Command (Mac) + Scroll
          e.preventDefault();
        }
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener("wheel", handleWheelEvent, { passive: false });
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("wheel", handleWheelEvent);
      };
    }, []);
  return (
    <div>
    
      <div
        style={{
          position: "fixed",
          right: "2%",
          top: "5%",
          zIndex: 1000,
          mixBlendMode: "difference",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="18"
          viewBox="0 0 33 18"
          fill="none"
        >
          <path
            d="M18 8.5C18.3874 9.12801 17.9356 9.9375 17.1977 9.9375H10.8008C9.95294 9.9375 9.26562 9.25019 9.26562 8.40234V8.40234C9.26562 7.5545 9.95294 6.86719 10.8008 6.86719H16.9102L18 8.5V8.5ZM24 16.5L4.26562 16.8047C3.84375 16.8047 3.38281 16.7305 2.88281 16.582C2.38281 16.4336 1.91797 16.1914 1.48828 15.8555C1.06641 15.5117 0.710938 15.0703 0.421875 14.5312C0.140625 13.9844 0 13.3164 0 12.5273V1.53516C0 1.32422 0.0390625 1.125 0.117188 0.9375C0.195312 0.75 0.300781 0.585938 0.433594 0.445312C0.574219 0.304688 0.738281 0.195312 0.925781 0.117188C1.11328 0.0390625 1.31641 0 1.53516 0H13L15 3L3.04688 3.04688V12.5273C3.04688 12.9258 3.15234 13.2305 3.36328 13.4414C3.57422 13.6523 3.88281 13.7578 4.28906 13.7578L22 13.5L24 16.5Z"
            fill="white"
          />
          <path
            d="M32.5 3.04688H25.7852V17.3447L22.7383 12.7516V3.04688H16.3118L14.2773 0H32.5V3.04688Z"
            fill="white"
          />
        </svg>
      </div>
      <div>
        <Navbar />
        <Home />
        <SectionSecond />
        <Service />
        <About/>
        <Projects/>
      </div>
    </div>
  );
};

export default App;



