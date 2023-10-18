import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Service.module.css";
// import img from "/service.jpg";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Service() {
  const textRef = useRef(null);
  const container = useRef(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    gsap.to(container.current, {
      y: 0.08 * container.current.parentNode.offsetHeight, // Adjust this value as needed
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        markers: false,
        end: "bottom top ",
        scrub: 0, // Enable scrubbing for parallax effect
      }
    });

    gsap.fromTo(
      ".img",
      {
        opacity: 0,
        ease: "rough",
        scrollTrigger: {
          trigger: ".img",
          start: "top top",
        },
      },
      { opacity: 1, duration: 4 }
    );

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "10% 80%",
        end: "90% 70%",
        scrub: 2,
      },
    });
    tl.to(
      ".box",
      {
        width: screenWidth < 840 ? "90%" : "50%",
        duration: 3,
        ease: "ease",
      },
      1
    );
    tl.fromTo(
      ".BoxWrapperContent",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      },
      2
    );

   

    // Event listener for window resize
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      // Remove the event listener on unmount
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]);

  const imageUrl = "https://images.unsplash.com/photo-1695883701435-7bd88f796e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const serviceImg="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTJGdXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  return (
    <div className={`${style.container}`} ref={container}>
      <img src={imageUrl} className={`${style.serviceImg}`} alt="Service Background" />
      <div
        style={{
          width: "80%",
          float: "right",
          marginTop: "10%",
          marginLeft: "auto",
        }}
      />
      <div className={style.containertext}>SERVICE</div>
      <div className={`BoxWrapper ${style.BoxWrapper}`}>
        <div
          style={{ color: "white" }}
          className={`BoxWrapperContent ${style.BoxWrapperContent}`}
        >
          <h2 style={{ color: "white", fontSize: "5vw" }}>TEST</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
          nulla pariatur sunt suscipit non sit fugiat, optio repellendus
          commodi?
        </div>
        <div className={`box ${style.imageWrapper}`}>
          <img src={serviceImg} className={`img ${style.img}`} alt="Demo" />
        </div>
      </div>
    </div>
  );
}

export default Service;