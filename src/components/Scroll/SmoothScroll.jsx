import { useEffect, useRef } from "react";

import "./SmoothScroll.css";
import useWindowSize from "./useWindowSize";

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
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
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
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
