import { useRef, useEffect, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Home.module.css";

const Home = () => {
  const elementRef = useRef(null);
  const contentWrapper = useRef(null);
  const mainContent = useRef(null);
  const card = useRef(null);
  const isMobile = window.matchMedia("(max-width: 820px)").matches;
  const setupScrollTrigger = useCallback(() => {
    const animation = gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.to(card.current, {
      y: `${isMobile?'30vw':'5vw'}`,
      rotate: 10,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });

    return tl;
  }, [isMobile]);

  const handleMouseMove = useCallback(
    (e) => {
      const cardItem = card.current;
      const xAxis = (elementRef.current.clientWidth  / 2 - e.clientX) / 80;
      cardItem.style.transform = `translateX(${xAxis}px) translateY(${isMobile?'30vw':'5vw'}) rotate(10deg)`;
    },
    [isMobile]
  );

  useEffect(() => {
    const tl = setupScrollTrigger();
    return () => {
      tl.kill();
    };
  }, [setupScrollTrigger]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const demo =
    "https://cdn.pixabay.com/photo/2023/06/07/20/03/ai-generated-8048160_640.jpg";

  return (
    <div ref={elementRef} className={style.container}>
      <div className={style.contentWrapper} ref={contentWrapper}>
        <div className={style.cardWrapper}>
          <div className={style.cardImage} ref={card}>
            <img src={demo} alt="Demo" />
          </div>
        </div>
        <div ref={mainContent} className={style.mainContent}>
          <h1 className={style.brandName}>ENIGMA</h1>
          <h1 className={style.brandNameSec}>VISION</h1>
          <h2 className={style.OwnName}>*BY SATYA</h2>
          <h3>* YOUR VISION MY RESPONSIBILITY</h3>
        </div>
      </div>
      <div className={style.linkTag}>{/* Render your links here */}</div>
    </div>
  );
};

export default Home;
