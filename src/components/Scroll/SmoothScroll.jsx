import { useEffect, useRef, useState } from "react";

import "./SmoothScroll.css";
import useWindowSize from "./useWindowSize";
import Navbar from "../Navbar/Navbar";

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef();
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  let animationFrameId; // Define a variable to hold the animation frame ID

  

  useEffect(() => {
    setBodyHeight();
    return () => {
      // Cleanup function to clear animation frame when component unmounts
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationFrameId, windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
  };

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call and store the animation frame ID
    animationFrameId = requestAnimationFrame(() => smoothScrollingHandler());
  };

  useEffect(() => {
    // Start smooth scrolling when the component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
    animationFrameId = requestAnimationFrame(() => smoothScrollingHandler());

    return () => {
      // Cleanup function to clear animation frame when component unmounts
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="parent" >
      <div
        style={{
          position: "fixed",
          right: "2%",
          top: "30px",
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
      <Navbar />
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
