import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PhysicsDemo.css";
import img from "./img.jpg";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function PhysicsDemo() {
  const textRef = useRef(null);
  const container = useRef(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Animation function
    function animateText(element) {
      const newText = [];
      const theText = textRef.current;

      for (let i = 0; i < theText.innerText.length; i++) {
        const newChar = document.createElement("div");

        if (theText.innerText[i] === " ") {
          newChar.innerHTML = "&nbsp;";
        } else {
          newChar.textContent = theText.innerText[i];
        }

        newText.push(newChar);
      }

      theText.innerHTML = "";

      newText.forEach((char) => {
        theText.appendChild(char);
      });

      gsap.fromTo(
        `${element} > div`, // Use a single selector string
        {
          opacity: 0,
          y: 30,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.02,
          ease: "power2.out", // Apply an easing function for smoother animation
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play pause none none",
            end: "90% 70%",
            pinSpacing: true,
            scrub: 2,
          },
        },
        -1
      );
    }

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "10% 80%",
        end: "90% 70%",
        scrub: 2,
      },
    });
    tl.to(".box", {
      width: screenWidth<840 ? "90%" : "50%",
      duration: 3,
      ease: "ease", // Apply an easing function for smoother animation
    }, 1);
    tl.fromTo(
      ".BoxWrapperContent",
      { opacity: 0},
      {
        opacity: 1,
       
        duration: 3,
        ease: "power2.out", // Apply an easing function for smoother animation
      },
      2
    );

    // Initialize text animation
    animateText("#text-anim");

    // Event listener for window resize
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      // Remove the event listener on unmount
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]);

  return (
    <div className="container" ref={container}>
      <h1 ref={textRef} id="text-anim">
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
      <div className="BoxWrapper">
        <div className="BoxWrapperContent">
        <h2>TEST</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
          nulla pariatur sunt suscipit non sit fugiat, optio repellendus
          commodi?
        </div>
        <div className="box">
          <img src={img} className="img" alt="Demo" />
        </div>
      </div>
    </div>
  );
}

export default PhysicsDemo;
