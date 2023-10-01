import style from "./Home.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Home = () => {
  const videoUrl = 'https://player.vimeo.com/external/489633226.sd.mp4?s=a500a3f029e29953f06c8ada1ffbb3a2b36b5225&profile_id=164&oauth2_token_id=57447761';
  const elementRef = useRef(null);
  const video = useRef(null);
  const mainContent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    const videoElement = video.current;

    if (element && videoElement) {
      // Main content animation (unchanged)
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:element,
          start:"50% 30%",
          end:"50% 30%",
          markers:false,
          toggleActions:"play none reverse  none"
        }
      });
        tl.to(mainContent.current,{opacity: 1, duration: 2, ease: 'power2.out'});
        tl.to(mainContent.current,{height:"0%",duration: 2, ease: 'power2.out'},"-=2");

      // Video parallax animation
      gsap.to(videoElement, {
        y:   0.5 * video.current.parentNode.offsetHeight, // Adjust this value as needed
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: "top top",
          markers:false,
          end: "bottom top ",
          scrub: 4, // Enable scrubbing for parallax effect
        }
      });
    }
  }, []);

  return (
    <div ref={elementRef} className={style.container}>
      <video ref={video} loop autoPlay muted className={`${style.video} video`}>
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div ref={mainContent} className={style.mainContent}>
        <h2 className={style.topContent}>YOUR VISION OUR RESPONSIBILITY</h2>
        <h1 className={style.middleContent}>
        ENIGMA TECH
        </h1>
        <h2 className={style.bottomContent}>VISION</h2>
      </div>
    </div>
  );
}

export default Home;
