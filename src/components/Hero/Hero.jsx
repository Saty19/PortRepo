import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import styles from './Hero.module.css';
import video from './video.webm';

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const card = document.querySelector(`.${styles.card}`);
    const topSection = document.querySelector('.can');

    const handleMouseMove = (event) => {
      const mouseX = -((window.innerWidth / 2) - event.pageX) / 60;
      const mouseY = ((window.innerHeight / 2) - event.pageY) / 60;

      card.style.transform = `rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;
    };

    topSection.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      topSection.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div className={`can ${styles.container}`}>
      <video loop autoPlay muted className={styles.video}>
        <source src={video} type="video/webm" />
      </video>

      <div className={styles.leftContent}>
        <h1 className={styles.leftH1}>YOUR IMAGINATION</h1>
        <h2 className={styles.leftH1} style={{ color: '' }}>
          MY INNOVATION
        </h2>
      </div>

      <div className={styles.MainContent}>
        <div className={`${styles.card} card`}>
          <div className={`${styles.thumb} thumb`}></div>
          <h2 className={`${styles.Cardh1} Cardh1`}>SATYA</h2>
          <span className={`${styles.span} span`}>CREATIVE THE WAY YOU KNOW!</span>
        </div>
      </div>

      {screenWidth > 840 ? (
        <div className={styles.linkTag}>
          <FaFacebookSquare size={40} color="white" />
          <AiFillGithub size={40} color="white" />
          <AiFillInstagram size={40} color="white" />
        </div>
      ):(
        <div className={styles.linkTag}>
        <FaFacebookSquare size={20} color="black" />
        <AiFillGithub size={20} color="black" />
        <AiFillInstagram size={20} color="black" />
      </div>
      )}
    </div>
  );
};

export default Hero;
