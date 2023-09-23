import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PhysicsDemo.css";
import img from "./img.jpg";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function PhysicsDemo() {
  const textRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    function animation_text_1(element) {
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
        `${element} div`,
        {
          opacity: 0,
          y: 30,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.02,
          // ease: 'elastic(1.2, 0.5)',
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play pause none none",
            markers: true,
            pinSpacing: true,
            // scrub:0.5
          },
        },
        0
      );
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "10% 80%",
        end: "90% 10%",
        scrub: 0.8,
      },
    });
    tl.to(".box", { width: "40%", duration: 1 }, 0.2);
    // Call the animation function with your target element
    animation_text_1("#text-anim");
  }, []);

  return (
    <div className="container" ref={container}>
      <h1 ref={textRef} id="text-anim">
        NOW I AM JUST USING THIS FOR TESTING
      </h1>
      <div
        style={{
          width: "80%",
          height: "1px",
          background: "black",
          float: "right",
          marginTop: "10%",
          marginLeft: "auto",
        }}
      />
      <div className="boxWrapper">
        <div className="BoxWrapperContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
          nulla pariatur sunt suscipit non sit fugiat, optio repellendus
          commodi?
        </div>
        <div className="box">
          <img src={img} className="img" />
        </div>
      </div>
    </div>
  );
}

export default PhysicsDemo;
