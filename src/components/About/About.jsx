import { useEffect, useRef } from "react";
import style from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import saty from "/satya3.png"; // Adjust the path to your image

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Define a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Trigger when container is at 80% of the viewport
        end: "bottom top",
        toggleActions:"play reverse none none",
        scrub: false, // Enables smooth scrubbing effect
      },
    });

    // Add animations to rotate text elements on the X-axis
    tl.fromTo(
      ".text-element",
      { rotationX: 90,opacity:0 }, // Initial rotation
      { rotationX: 0, opacity:1, duration: 3 ,transition:"none"} // Final rotation
    );

    // Ensure that the ScrollTrigger updates when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  const demoImg="https://assets.website-files.com/62cfb3313a1a61a7d399c600/62cfba001eea8f0afa9f0d48_man_hero_cropped-min-p-800.png"
  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.firstContentWrapper}>
        <div className={`text-element ${style.firstLeftContent}`}>SATYADAR</div>
        <div className={`text-element ${style.firstRightContent}`}>SAN</div>
      </div>
      <div className={style.secContentWrapper}>
        <div className={`text-element ${style.secLeftContent}`}>TALK</div>
        <div className={`text-element ${style.secRightContent}`}>DEVLO</div>
      </div>
      <div className={`text-element ${style.thirdContentWrapper}`}>PER</div>
      <div className={style.forthContentWrapper}>
        <div className={`text-element ${style.forthLeftContent}`}>&</div>
        <div className={`text-element ${style.forthRightContent}`}>DESIGNER</div>
      </div>
      <div className={style.imageWrapper}>
        <img src={saty} className={style.saty} />
        <div className={style.sideBlack}></div>
        <div className={style.sideBlackRight}></div>
        <div className={style.bottomBlack}></div>
      </div>
    </div>
  );
};

export default About;
