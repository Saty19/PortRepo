import style from "./Home.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useEffect, useState, useMemo } from 'react';
import img from "/SecImage.jpg"
const Home = () => {
 
  const elementRef = useRef(null);
 
  const mainContent = useRef(null);

  const animation = useMemo(() => {
    return gsap.registerPlugin(ScrollTrigger);
  }, []);
  useLayoutEffect(()=>{
    animation;

    gsap.to(elementRef.current, {
      y: 0.1 * elementRef.current.parentNode.offsetHeight, // Adjust this value as needed
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top top",
        markers: false,
        end: "bottom top ",
        scrub: 0, // Enable scrubbing for parallax effect
      },
    });


  },[animation])

  

  // Screen width and link tag
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const [showLinkTag, setShowLinkTag] = useState(false);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    const scrollPercentage = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    setShowLinkTag(scrollPercentage >= 10);
  }, [scrollY]);

  return (
    <div ref={elementRef} className={style.container}>
      <div className={style.cardImage}>
      
      <img src={img} />
      </div>
      <div ref={mainContent} className={style.mainContent}>
       
      <h1 className={style.brandName}>ENIGMA</h1>
      <h1 className={style.brandNameSec}>VISION</h1>
      <h2 className={style.OwnName}>*BY SATYA</h2>
      <h3>* YOUR VISION MY RESPONSIBILITY</h3>
      </div>
      {screenWidth > 840 ? (
        <div className={style.linkTag}>
     {    /* <FaFacebookSquare size={40} color="white" />
          <AiFillGithub size={40} color="white" />
      <AiFillInstagram size={40} color="white" />*/}
        </div>
      ) : (
        <div
          className={`${style.linkTag} ${showLinkTag ? style.show : ''}`}
        >
         {/* <FaFacebookSquare size={20} color="black" />
          <AiFillGithub size={20} color="black" />
          <AiFillInstagram size={20} color="black" />*/}
        </div>
      )}
    </div>
  );
}

export default Home;
