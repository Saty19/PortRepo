import  { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Service.module.css";
import img from "/service.jpg";
import back from "/serviceBack.jpg";

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
    // // Animation function
    // function animateText(element) {
    //   const newText = [];
    //   const theText = textRef.current;

    //   for (let i = 0; i < theText.innerText.length; i++) {
    //     const newChar = document.createElement("div");

    //     if (theText.innerText[i] === " ") {
    //       newChar.innerHTML = "&nbsp;";
    //     } else {
    //       newChar.textContent = theText.innerText[i];
    //     }

    //     newText.push(newChar);
    //   }

    //   theText.innerHTML = "";

    //   newText.forEach((char) => {
    //     theText.appendChild(char);
    //   });

    //   gsap.fromTo(
    //     `${element} > div`,
    //     {
    //       opacity: 0,
    //       y: 30,
    //     },
    //     {
    //       duration: 1,
    //       opacity: 1,
    //       y: 0,
    //       stagger: 0.02,
    //       ease: "power2.out",
    //       scrollTrigger: {
    //         trigger: element,
    //         start: "top 70%",
    //         toggleActions: "play pause none none",
    //         end: "90% 70%",
    //         pinSpacing: true,
    //         scrub: 2,
    //       },
    //     },
    //     -1
    //   );
    // }

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


    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: `${ screenWidth < 840 ?"10%":"top"} 80%`,
        end: `${ screenWidth < 840 ?"80%":"bottom"} top`,
        markers:false,
        toggleActions: "play none none none",
        scrub: 5, // Increase the scrub value to slow down the animation
      },
      x: "-50%",
      duration: 3 , // Increase the duration for a smoother effect
    });
    
    // Initialize text animation
    // animateText(`#textanim`);

    // Event listener for window resize
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      // Remove the event listener on unmount
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]);
  const imageUrl ="https://images.unsplash.com/photo-1695883701435-7bd88f796e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  return (
    <div className={`${style.container}`} ref={container}>
      <img src={imageUrl} className={`${style.serviceImg}`} alt="Service Background" />
      <h1 ref={textRef} id="textanim" className={style.textpup}>
        NOW I AM JUST USING THIS FOR TESTING
      </h1>
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
          <h2 style={{ color: "white", fontSize: "4em" }}>TEST</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
          nulla pariatur sunt suscipit non sit fugiat, optio repellendus
          commodi?
        </div>
        <div className={`box ${style.imageWrapper}`}>
          <img src={img} className={`img ${style.img}`} alt="Demo" />
        </div>
      </div>
    </div>
  );
}

export default Service;
