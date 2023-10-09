import { useEffect, useRef } from "react";
import style from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import saty from "/saty.png"; // Adjust the path to your image

const About = () => {
  // Create a ref for the container element
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure that GSAP's ScrollTrigger is used
    gsap.registerPlugin(ScrollTrigger);

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true, // Adjust this option for the desired effect
      },
    });

    // Define animations using gsap methods
    tl.fromTo(
      ".frontTextWrapper",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    );

    tl.fromTo(
      ".backText",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    tl.fromTo(
      ".aboutText",
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.5"
    );

    tl.fromTo(
      ".satyaImg",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.backText}>
        <h1 className={style.name}>
          SATYADAR <span className={style.stocktext}>SAN</span>
        </h1>
        <h1 className={style.nextContent}>
          <span style={{ textAlign: "center", width: "50%" }}>TALK</span>
          <span
            style={{
              float: "right",
              width: "50%",
              fontSize: "0.8em",
              wordWrap: "break-word",
              textAlign: "right",
            }}
          >
            DEVELO PER
          </span>
        </h1>
      </div>

      <img className={style.satyaImg} src={saty} alt="Satya" />
      <div className={style.frontTextWrapper}>
        <h1 className={style.frontText}>
          <span className={style.andText}>&</span>
          <span style={{placeSelf:"flex-end"}}>WEB DESIGNER</span>
        </h1>
      </div>
      <div className={style.aboutText}>
        * ABOUT
      </div>
    </div>
  );
};

export default About;
