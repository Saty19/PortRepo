import React, { useEffect } from 'react'
import "./App.css";
import SectionSecond from "./components/Section2/SectionSecond";
import Service from "./components/Service/Service";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { useLayoutEffect, useState } from "react";
import SmoothScroll from "./components/Scroll/SmoothScroll";
import Projects from "./components/Projects/Projects";
import Testimonial from "./components/Testimonials/Testimonial";
import Navbar from "./components/Navbar/Navbar";
import { Element } from "react-scroll";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MemoizedHome = React.memo(Home);
const MemoizedSectionSecond = React.memo(SectionSecond);
const MemoizedService = React.memo(Service);
const MemoizedAbout = React.memo(About);
const MemoizedProjects = React.memo(Projects);
const MemoizedTestimonial = React.memo(Testimonial);

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isToggled, setIsToggled] = useState(false);


  const isMobile = windowWidth <= 840;
  useEffect(() => {
    isMobile?'':  window.scrollTo(0,0);
  }, [isMobile]);
  useLayoutEffect(() => {

    const handleWheelEvent = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      isMobile?'': window.location.reload(); // Reload the page on resize
    };

    window.addEventListener("wheel", handleWheelEvent, { passive: false });
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
      window.removeEventListener("resize", handleResize); // Remove event listener on unmount
    };
  }, [isMobile]);
  useEffect(() => {
    const handlePopState = () => {
      // Trigger a re-render when the back button is pressed
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  // useEffect(() => {
  //   // Refresh ScrollTrigger on component updates
  //   ScrollTrigger.refresh();
  // }, []);
  return (
    // Conditionally render SmoothScroll or a regular div
    isMobile ? (
      <div>
        <div
          style={{
            position: "fixed",
            right: "2%",
            top: "30px",
            zIndex: 1000,
            mixBlendMode: "difference",
            display: isToggled ? "none" : "block", 
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
        <Navbar IsButtonToggled={setIsToggled} />
        <Element name="home">
          <Home />
        </Element>
        <Element name="port">
          <SectionSecond />
        </Element>
        <Element name="service">
          <Service />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="work">{<Projects />}</Element>
        <Element name="contact">
          <Testimonial />
          
        </Element>
      </div>
    ) : (
   
      <SmoothScroll>
      <div>
        <Element name="home">
          <MemoizedHome />
        </Element>
        <Element name="port">
          <MemoizedSectionSecond />
        </Element>
        <Element name="service">
          <MemoizedService />
        </Element>
        <Element name="about">
          <MemoizedAbout />
        </Element>
        <Element name="work">
          <MemoizedProjects />
        </Element>
        <Element name="contact">
          <MemoizedTestimonial />
        </Element>
      </div>
    </SmoothScroll>
    )
  );
};

export default App;
