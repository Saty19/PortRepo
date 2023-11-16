import { useEffect, useLayoutEffect, useRef } from "react";
import style from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import satyImage from "/satya3.png"; // Update the path to your image

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play none none none",
        scrub: true,
      },
    });

    tl.fromTo(
      ".textelement",
      { rotationX: 90, opacity: 0 },
      { rotationX: 0, opacity: 1, duration: 3, transition: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
      tl.kill();
    };
  }, []);
  const demoImg="https://assets.website-files.com/62cfb3313a1a61a7d399c600/62cfba001eea8f0afa9f0d48_man_hero_cropped-min-p-800.png"
  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.firstContentWrapper}>
        <div className={`${style.textelement} ${style.firstLeftContent}`}>SATYADAR</div>
        <div className={`${style.textelement} ${style.firstRightContent}`}>SAN</div>
      </div>
      <div className={style.secContentWrapper}>
        <div className={`${style.textelement} ${style.secLeftContent}`}>TALK</div>
        <div className={`${style.textelement} ${style.secRightContent}`}>DEVLO</div>
      </div>
      <div className={`${style.textelement} ${style.thirdContentWrapper}`}>PER</div>
      <div className={style.forthContentWrapper}>
        <div className={`${style.textelement} ${style.forthLeftContent}`}>&</div>
        <div className={`${style.textelement} ${style.forthRightContent}`}>DESIGNER</div>
      </div>
      <div className={style.imageWrapper}>
        <img src={demoImg} alt="Satya" className={style.saty} />
        <div className={style.sideBlack}></div>
        <div className={style.sideBlackRight}></div>
        <div className={style.bottomBlack}></div>
      </div>
    </div>
  );
};

export default About;
