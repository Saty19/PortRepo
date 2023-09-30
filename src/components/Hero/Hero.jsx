import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import styles from './Hero.module.css';
import ThreeElement from '../ThreeElement/ThreeElement';


const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const [showLinkTag, setShowLinkTag] = useState(false);

  // Function to update screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add a scroll event listener to track the scroll position
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      // Remove the event listeners when the component unmounts
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    // Calculate the scroll percentage
    const scrollPercentage = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Show the linkTag when scrolling reaches 60%
    setShowLinkTag(scrollPercentage >= 10);
  }, [scrollY]);
  

  return (
    <div className={`can ${styles.container}`}>
      

    

<ThreeElement/>

      {screenWidth > 840 ? (
        <div className={styles.linkTag}>
          <FaFacebookSquare size={40} color="white" />
          <AiFillGithub size={40} color="white" />
          <AiFillInstagram size={40} color="white" />
        </div>
      ):showLinkTag && (
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
