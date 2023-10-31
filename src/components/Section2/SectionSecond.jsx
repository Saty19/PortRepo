import { useEffect, useRef, useMemo, useCallback } from "react";
import style from "./SecSecond.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ThreeContent } from "./ThreeContent";

const SectionSecond = () => {
  const rec1 = useRef(null);
  const rec2 = useRef(null);
  const rec3 = useRef(null);
  const rec4 = useRef(null);
  const container = useRef(null);
  const rightContent = useRef(null);
  const leftContent = useRef(null);
  const leftTop = useRef(null);

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
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia("(max-width: 820px)").matches;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        markers: false,
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

    const containerColor = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "50% top",
        end: "bottom 80%",
        markers: false,
        scrub: 1,
      },
    });
    containerColor.fromTo(container.current, {
      background: "#f0f0f0",

    },{background:"#121212",duration:1});
  }, [rec1, rec2, rec3, rec4, container, leftContent]);

  useEffect(() => {
    setupScrollTrigger();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [setupScrollTrigger]);

  return (
    <div className={`section ${style.container}`} ref={container}>
      <ThreeContent />
      <div className={style.leftContent} ref={leftContent}>
        <div style={{ width: "100%" }} ref={leftTop}>
          {elements}
        </div>
      </div>
      <div className={style.rightContent} ref={rightContent}>
        TEST CONTENT
      </div>
      <div className={style.animatedContent}>PORTFOLIO</div>
    </div>
  );
};

export default SectionSecond;
