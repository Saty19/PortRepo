import style from "./Home.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";
import { useEffect, useRef, useMemo ,useState} from 'react';
// import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
// import { FaFacebookSquare } from 'react-icons/fa';

const Home = () => {
  const videoUrl = 'https://player.vimeo.com/external/489633226.sd.mp4?s=a500a3f029e29953f06c8ada1ffbb3a2b36b5225&profile_id=164&oauth2_token_id=57447761';
  const elementRef = useRef(null);
  const video = useRef(null);
  const mainContent = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    const videoElement = video.current;

    if (element && videoElement) {
      // Main content animation (unchanged)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "50% 30%",
          end: "50% 30%",
          markers: false,
          toggleActions: "play none reverse  none"
        }
      });
      tl.to(mainContent.current, { opacity: 1, duration: 2, ease: 'power2.out' });
      tl.to(mainContent.current, { height: "0%", duration: 2, ease: 'power2.out' }, "-=2");

      // Video parallax animation
      gsap.to(videoElement, {
        y: 0.5 * video.current.parentNode.offsetHeight, // Adjust this value as needed
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: "top top",
          markers: false,
          end: "bottom top ",
          scrub: 4, // Enable scrubbing for parallax effect
        }
      });
    }
  }, []);

  // Define the text animation function
  const textAnimation = useMemo(() => {
    return (event) => {
      let iteration = 0;
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval = null;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 40);
    };
  }, []);

  useEffect(() => {
    // When the component mounts, apply the text animation to the h1 element
    const h1Element = document.querySelector('.main');

    if (h1Element) {
      textAnimation({ target: h1Element });
    }
  }, [textAnimation]);

  //screenwidth linktag
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
    <div ref={elementRef} className={style.container}>
      <video ref={video} loop autoPlay muted className={`${style.video} video`}>
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div ref={mainContent} className={style.mainContent}>
        <h2 className={style.topContent}>YOUR VISION OUR RESPONSIBILITY</h2>
        <h1 className={`main ${style.middleContent}`} data-value="ENIGMA TECH">
          ENIGMA TECH
        </h1>
        <h2 className={style.bottomContent}>VISION</h2>
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
