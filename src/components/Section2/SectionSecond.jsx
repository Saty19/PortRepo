import React, { useRef, useMemo, useCallback, useLayoutEffect } from "react";
import style from "./SecSecond.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ThreeContent from "./ThreeContent";

const SectionSecond = () => {
  const rec1 = useRef(null);
  const rec2 = useRef(null);
  const rec3 = useRef(null);
  const rec4 = useRef(null);
  const containerSec = useRef(null);
  const rightContent = useRef(null);
  const leftContent = useRef(null);
  const leftTop = useRef(null);
  const animatedContent = useRef(null);

  const elements = useMemo(() => {
    return ["POWERFUL", "BRANDING", "STUNNING", "WEBSITES"].map((text, index) => (
      <div className={style.parent} key={index}>
        <div
          className={style.rectangle}
          ref={(el) =>
            index === 0
              ? (rec1.current = el)
              : index === 1
              ? (rec2.current = el)
              : index === 2
              ? (rec3.current = el)
              : (rec4.current = el)
          }
        >
          {text}
        </div>
      </div>
    ));
  }, []);

  const setupScrollTrigger = useCallback(() => {
    const isMobile = window.matchMedia("(max-width: 820px)").matches;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerSec.current,
        start: `${isMobile ? "40%" : "top"} 90%`,
        end: `${isMobile ? "70%" : "90%"} 50%`,
        scrub: 1,
      },
    });

    tl.to(leftContent.current, {
      opacity: 1,
      duration: 1,
      ease: "none",
    });
    tl.to(rec1.current, { y: "100%", direction: 1 }, 1);
    tl.to(rec2.current, { y: "100%", direction: 1 }, 1.2);
    tl.to(rec3.current, { y: "100%", direction: 1 }, 1.5);
    tl.to(rec4.current, { y: "100%", direction: 1 }, 1.7);
    gsap.to(animatedContent.current, {
      scrollTrigger: {
        trigger: containerSec.current,
        start: `${isMobile ? "40%" : "top"} 60%`,
        end: `${isMobile ? "70%" : "90%"} top`,
        scrub: 1,
      },
      y: "-100%",
      duration: 5,
    });

    const containerColor = gsap.timeline({
      scrollTrigger: {
        trigger: containerSec.current,
        toggleActions: "play restart none none",
        start: "50% top",
        end: "bottom 80%",
        scrub: 1,
      },
    });
    containerColor.fromTo(
      containerSec.current,
      {
        background: "#f0f0f0",
      },
      { background: "#121212", duration: 1 }
    );
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setupScrollTrigger();
  }, [setupScrollTrigger]);

  return (
    
    <div className={`section ${style.container}`} ref={containerSec}>
      <div className={style.leftContent} ref={leftContent}>
        <div style={{ width: "100%" }} ref={leftTop}>
          {elements}
        </div>
      </div>
      <div className={style.rightContent} ref={rightContent}>
        <div className={style.cardWrapper}>
          <div className={style.cardHead}>CONTENT</div>
          <div className={style.BackThreeContent}>ENIGMA</div>
          <div className={style.FrontfillThreeContent}>TURN YOUR PRODUCT TO 3D</div>
          <ThreeContent />
          <div className={style.FrontThreeContent}>TURN YOUR PRODUCT TO 3D</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="23"
            viewBox="0 0 90 23"
            fill="none"
          >
            <rect
              y="10.981"
              width="15.5295"
              height="14.9543"
              transform="rotate(-45 0 10.981)"
              fill="#D9D9D9"
            />
            <rect
              x="23.0066"
              y="10.981"
              width="15.5295"
              height="14.9543"
              transform="rotate(-45 23.0066 10.981)"
              fill="#D9D9D9"
            />
            <rect
              x="46.0132"
              y="11.5562"
              width="15.5295"
              height="14.9543"
              transform="rotate(-45 46.0132 11.5562)"
              fill="#D9D9D9"
            />
            <rect
              x="68.4448"
              y="10.981"
              width="15.5295"
              height="14.9543"
              transform="rotate(-45 68.4448 10.981)"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
      <div className={style.pageNameWrapper}>
        <div className={style.animatedContent} ref={animatedContent}>
          PORTFOLIO
        </div>
      </div>
    </div>
  );
};

export default SectionSecond;
