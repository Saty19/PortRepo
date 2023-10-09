import  { useEffect, useRef } from "react";
import style from "./SecSecond.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import image from "/SecImage.jpg"
// import ThreeElement from "../ThreeElement/ThreeElement";

const SectionSecond = () => {
  const rec1 = useRef(null);
  const rec2 = useRef(null);
  const rec3 = useRef(null);
  const rec4 = useRef(null);
  const imgPrlx = useRef(null);

  const rightContent = useRef(null);
  const leftContent = useRef(null);
  const parra = useRef(null);
  const leftTop = useRef(null);
  const ThreeContent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia("(max-width: 820px)").matches;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        markers: false,
        start: `${isMobile ? "40%" : "30%"} 90%`,
        end: `${isMobile ? "70%" : "90%"} 20%`,
        scrub: 1,
        toggleActions: "play none none none",
      },
    });

    tl.to(rec1.current, { y: "100%", direction: 1 }, 2);
    tl.to(rec2.current, { y: "100%", direction: 1 }, 2.5);
    tl.to(rec3.current, { y: "100%", direction: 1 }, 3);
    tl.to(rec4.current, { y: "100%", direction: 1 }, 3.5);
    tl.to(parra.current, { opacity: 1, duration: 3,position:isMobile && "absolute" ,zIndex:isMobile && 2}, 3);
    tl.to(ThreeContent.current, { width: "70%", top: isMobile ? "70%" : "80%", height: isMobile && "70%",borderRadius: 10, duration: 2 }, 4);
    tl.to(rightContent.current, {
      opacity: 1,
      duration: 0.8,
      ease: "none",
    }, 0.6);
    tl.to(leftContent.current, {
      opacity: 1,
      duration: 1,
      ease: "none",
    }, 0);

    gsap.to(imgPrlx.current, {
      y:   0.8 * imgPrlx.current.parentNode.offsetHeight, // Adjust this value as needed
      ease: 'none',
      scrollTrigger: {
        trigger: imgPrlx.current,
        start: "top top",
        markers:false,
        end: "bottom top ",
        scrub: 0, // Enable scrubbing for parallax effect
      }
    });

    return () => {
      tl.kill(); // Kill the timeline to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(); // Kill all ScrollTrigger instances
      });
    };
  }, []);
  const imageUrl ="https://plus.unsplash.com/premium_photo-1674740443999-3d67127b5389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDNkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  return (
    <div className={`section ${style.container}`} >
    <img src={imageUrl} ref={imgPrlx} className={style.secimage} style={{objectFit:"cover"}}/>
      <div className={style.leftContent} ref={leftContent}>
        <div style={{ width: "100%" }} ref={leftTop}>
          {["JAVA", "JAVASCRIPT", "REACT", "THREE"].map((text, index) => (
            <div className={style.parent} key={index}>
              <div className={style.rectangle} ref={(el) => index === 0 ? rec1.current = el : index === 1 ? rec2.current = el : index === 2 ? rec3.current = el : rec4.current = el}>
                {text}
              </div>
            </div>
          ))}
        </div>

       { /*<p ref={parra} className={style.Parragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis laborum molestiae placeat voluptatum animi at ex quos doloribus mollitia adipisci?
          </p>*/}
      </div>

      <div className={style.rightContent} ref={rightContent}>
        <div className={style.threeContent} ref={ThreeContent}>
          NO LIMIT TO SHOW <br />
          YOUR 3D CONTENT
        </div>
        </div>
        <div className={style.animatedContent}>
        BLOW MIND
        </div>
    </div>
  );
};

export default SectionSecond;
