import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import SectionSecond from "./components/Section2/SectionSecond";
import Service from "./components/Service/Service";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";

import { lazy } from "react";
import { useLayoutEffect } from "react";
import SmoothScroll from "./components/Scroll/SmoothScroll";

const App = () => {

  const LazyProject = lazy(() => import("./components/Projects/Projects"));
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
      <div
        style={{
          position: "fixed",
          right: "2%",
          top: "3%",
          zIndex: 1000,
          mixBlendMode: "difference",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="50"
          viewBox="0 0 52 15"
          fill="none"
        >
          <path
            d="M1 7H24.1106M51 7H28.8992"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="26" cy="7" r="6" stroke="white" strokeWidth="2" />
          <path
            d="M1 7L24.5 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M27.5 13L51 7"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M26.5077 7.00002L26.5077 11"
            stroke="white"
            strokeLinecap="round"
          />
          <path
            d="M28 7C28 7 27.1612 6.2145 26.5 6.21451C25.8387 6.21452 25 7 25 7C25 6.17157 25.6716 5.5 26.5 5.5C27.3284 5.5 28 6.17157 28 7Z"
            fill="white"
          />
          <path d="M1 9H9" stroke="white" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <Navbar />
        <Home />
        <SectionSecond />
        <Service />

        <About />

        <Suspense fallback={null}>
          <LazyProject />
        </Suspense>
      </div>
    </SmoothScroll>
  );
};

export default App;
