

import style from "./Home.module.css"
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';

const Home = () => {
  const videoUrl = 'https://player.vimeo.com/progressive_redirect/playback/824814926/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=92f350bb5b4d1455f72954041a05499d90724afb4ded1763b0e860ea7e84c3dc';
  const elementRef = useRef(null);
  const mainContent = useRef(null);
  
  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    const element = elementRef.current;

    if (element) {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:element,
        start:"top top"
      }
    });
      tl.fromTo(element, { opacity: 0 },{opacity: 1, duration: 1, ease: 'power3.out'});
      
    return ()=>{
      tl.kill()
    }
  }
  },[])

  return (
    <div ref={elementRef} className={style.container}>
      <video loop autoPlay muted className={style.video}>
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
  )
}

export default Home
