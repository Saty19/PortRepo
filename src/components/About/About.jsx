import { useEffect, useRef } from "react";
import style from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import saty from "/saty.png"; // Adjust the path to your image

const About = () => {
  // Create a ref for the container element
  const containerRef = useRef(null);
  const demoImg="https://assets.website-files.com/62cfb3313a1a61a7d399c600/62cfba001eea8f0afa9f0d48_man_hero_cropped-min-p-800.png"
  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.firstContentWrapper}>
        <div className={style.firstLeftContent}>SATYADAR</div>
        <div className={style.firstRightContent}>SAN</div>
      </div>
      <div className={style.secContentWrapper}>
        <div className={style.secLeftContent}>TALK</div>
        <div className={style.secRightContent}>DEVLO</div>
      </div>
      <div className={style.thirdContentWrapper}>PER</div>
      <div className={style.forthContentWrapper}>
        <div className={style.forthLeftContent}>&</div>
        <div className={style.forthRightContent}>DESIGNER</div>
      </div>
      <div className={style.imageWrapper}>
        <img src={demoImg} className={style.saty} />
        <div className={style.sideBlack}></div>
        <div className={style.sideBlackRight}></div>
        <div className={style.bottomBlack}></div>
      </div>
    </div>
  );
};

export default About;
