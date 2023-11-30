import { Fragment, useLayoutEffect, useMemo, useRef } from "react";
import style from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import saty from "/satya3.png";

const About = () => {
  const containerAboutRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerAboutRef.current,
        markers:false,
        start: "-10% center",
        end: "30% top",
        toggleActions:"play restart none none",
        scrub: true,
      },
    });

    tl.fromTo(
      ".textelement",
      { rotationX: 90, opacity: 0 },
      { rotationX: 0, opacity: 1, duration: 3, ease: "power3.inOut" }
    );

  
  }, []);

  const elements = useMemo(() => (
    <Fragment>
      <div className={style.firstContentWrapper}>
        <div className={`textelement ${style.firstLeftContent}`}>SATYADAR</div>
        <div className={`textelement ${style.firstRightContent}`}>SAN</div>
      </div>
      <div className={style.secContentWrapper}>
        <div className={`textelement ${style.secLeftContent}`}>TALK</div>
        <div className={`textelement ${style.secRightContent}`}>DEVLO</div>
      </div>
      <div className={`textelement ${style.thirdContentWrapper}`}>PER</div>
      <div className={style.forthContentWrapper}>
        <div className={`textelement ${style.forthLeftContent}`}>&</div>
        <div className={`textelement ${style.forthRightContent}`}>DESIGNER</div>
      </div>
    </Fragment>
  ), []);

  const demoImg ="https://assets.website-files.com/62cfb3313a1a61a7d399c600/62cfba001eea8f0afa9f0d48_man_hero_cropped-min-p-800.png";
  return (
    <div className={style.container} ref={containerAboutRef}>
      {elements}
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
