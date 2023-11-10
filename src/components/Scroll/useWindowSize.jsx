import { useState, useLayoutEffect } from "react";

export default function useWindowSize() {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  

  const [windowSize, setWindowSize] = useState({width: window.innerWidth,
    height: window.innerHeight,});

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
