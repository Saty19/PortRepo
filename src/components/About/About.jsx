import { useEffect, useRef } from "react";
import style from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import saty from "/saty.png"
const About = () => {
 

  // useEffect(()=>{
  



  // },[])

  return (
    <div className={style.container}>
   
      <div className={style.backText}>
      <h1 className={style.name}>
      SATYADAR <span className={style.stocktext}>SAN</span> 
      </h1>
      <h1 className={style.nextContent}>
       <span style={{float:"left"}}>TALK</span> 
       <span style={{float:"right",fontSize:"0.8em",wordWrap:"break-word",width:"50%",textAlign:"right"}}>DEVELO PER</span> 
      </h1>
      </div>

      <img className={style.satyaImg} src={saty} />
      <div className={style.frontTextWrapper}>
      <h1 className={style.frontText}>
      <span className={style.andText}>&</span>
       WEB DESIGNER
      </h1>
      </div>
      <div className={style.aboutText}> 
       * ABOUT
      </div>
    </div>
  );
};

export default About;
