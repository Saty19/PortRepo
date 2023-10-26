import style from "./Home.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {  useRef, useEffect, useState, useMemo, useLayoutEffect } from 'react';
import { useSelector } from "react-redux";



const Home = () => {

  const elementRef = useRef(null);
  const contentWrapper = useRef(null)
  const mainContent = useRef(null);
  const card = useRef(null)
  const animation = useMemo(() => {
    return gsap.registerPlugin(ScrollTrigger);
  }, []);
 
  const size=useSelector(state=>state.size.size)
  const [screenWidth, setScreenWidth] = useState(size);
  const [scrollY, setScrollY] = useState(0);
  const [showLinkTag, setShowLinkTag] = useState(false);


  useLayoutEffect(() => {
  
    animation
    const tl= gsap.to(card.current,{y:-100,rotate:10,opacity:1,duration:2, ease:"power2.out"})

      

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('resize', updateScreenWidth);

    return () => {
      tl.kill();
      window.removeEventListener('scroll', handleScroll);
      // window.removeEventListener('resize', updateScreenWidth);
    };
  }, [animation, size]);

  useEffect(() => {
   
    const scrollPercentage = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    setShowLinkTag(scrollPercentage >= 10);
  }, [scrollY]);
  const demo ="https://cdn.pixabay.com/photo/2023/06/07/20/03/ai-generated-8048160_640.jpg"
  return (
    <div ref={elementRef} className={style.container}>
      <div className={style.contentWrapper} ref={contentWrapper}>
        <div className={style.cardImage} ref={card}>

          <img src={demo} />
        </div>
        <div ref={mainContent} className={style.mainContent}>

          <h1 className={style.brandName}>ENIGMA</h1>
          <h1 className={style.brandNameSec}>VISION</h1>
          <h2 className={style.OwnName}>*BY SATYA</h2>
          <h3>* YOUR VISION MY RESPONSIBILITY</h3>
        </div>
      </div>
      {screenWidth > 840 ? (
        <div className={style.linkTag}>
 
          {
            /* <FaFacebookSquare size={40} color="white" />
            <AiFillGithub size={40} color="white" />
            <AiFillInstagram size={40} color="white" />*/
          }
        </div>
      ) : (
        <div
          className={`${style.linkTag} ${showLinkTag ? style.show : ''}`}
        >
          {
            /* <FaFacebookSquare size={20} color="black" />
            <AiFillGithub size={20} color="black" />
            <AiFillInstagram size={20} color="black" />*/
          }
        </div>
      )}
    </div>
  );
}

export default Home;
