import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet, HelmetProvider } from "react-helmet-async";
import style from "./Home.module.css";

const Home = () => {
  const card = useRef(null);
  const isMobile = window.matchMedia("(max-width: 820px)").matches;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const setupScrollTrigger = () => {
      return gsap.to(card.current, {
        y: `${isMobile ? "30vw" : "5vw"}`,
        rotate: 10,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
    };

    const tl = setupScrollTrigger();

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  const handleMouseMove = (e) => {
    const cardItem = card.current;
    const xAxis = (cardItem.clientWidth / 2 - e.clientX) / 80;
    cardItem.style.transform = `translateX(${xAxis}px) translateY(${
      isMobile ? "30vw" : "5vw"
    }) rotate(10deg)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const demo =
    "https://cdn.pixabay.com/photo/2023/06/07/20/03/ai-generated-8048160_640.jpg";

  return (
    <HelmetProvider>
      <Helmet>
        <title>Enigma Vision</title>
        <meta name="description" content="Explore Enigma Vision - Your Gateway to Creative Solutions. Discover innovative designs, powerful visions, and a commitment to bringing your ideas to life. Let's embark on a journey of creativity and excellence together." />
        {/* Add other meta tags, link tags, etc. for SEO */}
      </Helmet>

      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.cardWrapper}>
            <div className={style.cardImage} ref={card}>
              <img src={demo} alt="Demo" />
            </div>
          </div>
          <div className={style.mainContent}>
            <h1 className={style.brandName}>ENIGMA</h1>
            <h1 className={style.brandNameSec}>VISION</h1>
            <h2 className={style.OwnName}>*BY SATYA</h2>
            <h3>* YOUR VISION MY RESPONSIBILITY</h3>
          </div>
        </div>
        <div className={style.linkTag}>{/* Render your links here */}</div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
