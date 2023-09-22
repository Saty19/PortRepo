import React from 'react'
import styles from "./Hero.module.css"
// import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from 'react-icons/fa';
import video from "./video.webm"

const Hero = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const eX = -((window.innerWidth / 2 - e.pageX) / 30);
    const eY = (window.innerHeight / 2 - e.pageY) / 30;
    // console.log(eX)
    setRotateX(eX);
    setRotateY(eY);
  };

  //link
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [color, setColor] = useState(windowSize.innerWidth > 820 ? 'white' : '#2d3b41');

  useEffect(() => {
    function handleWindowResize() {
      const newSize = getWindowSize();
      setWindowSize(newSize);
      setColor(newSize.innerWidth > 820 ? 'white' : '#2d3b41');
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    //text call

  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const h1Ref = useRef(null);
  
  return (
    <div className={`can ${styles.container}`} onMouseMove={handleMouseMove} >
    
      <video loop autoPlay muted className={styles.video} >
        <source src={video} type="video/webm" />
      </video>



      <div className={styles.leftContent}>

        <h1 className={styles.leftH1}>YOUR IMAGINATION</h1>
        <h2 className={styles.leftH1} style={{ color: "" }}>MY INNOVATION</h2>
      </div>
      <div className={styles.MainContent}>

        <div
          className={styles.card}
          style={{
            transform: `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`,
            WebkitTransform: `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`,
            MozTransform: `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`,
          }}
        >
          <span className={styles.imageBacktext}>
            I'm your Creative Companion: <br />
            A Freelance UX/UI Designer <br /> and Web Developer on a mission to
            bring your digital dreams to life
          </span>
          <div className={styles.thumb}></div>
          <h1 ref={h1Ref} className={styles.Cardh1} data-value="SATYA">SATYA</h1>
          <span className={styles.imageFrontTest}>
            LET'S GROW YOUR BUSINESS WITH ME
          </span>
        </div>
      </div>

      <div className={styles.linkTag}>

      </div>

    </div>
  );
}

export default Hero
