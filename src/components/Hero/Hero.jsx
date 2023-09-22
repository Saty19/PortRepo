import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css'; // Import your CSS module here
import video from './video.webm';

const Hero = () => {
  useEffect(() => {
    const card = document.querySelector(`.${styles.card}`);
    const topSection = document.querySelector(`.${styles.container}`);

    topSection.addEventListener('mousemove', (event) => {
      const mouseX = -((window.innerWidth / 2) - event.pageX) / 30;
      const mouseY = ((window.innerHeight / 2) - event.pageY) / 30;

      gsap.to(card, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out',
      });
    });
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
          <div className={styles.thumb}></div>
          <h2>Gsap</h2>
          <span>3D card Animation on hover!</span>
        </div>
      </div>

      <div className={styles.linkTag}></div>
    </div>
  );
};

export default Hero;
