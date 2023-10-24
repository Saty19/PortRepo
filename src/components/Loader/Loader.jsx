import React, { useEffect } from "react";
import gsap from "gsap";
import style from "./Loader.module.css";

const animateLoader = () => {
  const timeline = gsap.timeline();
  timeline.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 0.5 });
  // You can add more animations as needed
  return timeline;
};

const Loader = () => {
  useEffect(() => {
    const animation = animateLoader();

    // Hide the loader after the animation is complete
    animation.then(() => {
      document.querySelector(".container").style.display = "none";
    });
  }, []);

  return (
    <div className={style.container}>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="80"
    // height="50"
    viewBox="0 0 52 15"
    fill="none"
    className={style.svg}
  >
    <path
      d="M1 7H24.1106M51 7H28.8992"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="26" cy="7" r="6" stroke="white" strokeWidth="" />
    <path
      d="M1 7L24.5 1"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M27.5 13L51 7"
      stroke="white"
      strokeWidth="1"
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
  )
}

export default Loader
