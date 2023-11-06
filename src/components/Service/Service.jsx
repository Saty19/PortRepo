import { useLayoutEffect, useRef, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Service.module.css";
import { serviceContent } from "./servicecontent";

gsap.registerPlugin(ScrollTrigger);

function Service() {
  const containerRef = useRef(null);
  const imagewrapperRef = useRef(null);
  const itemRef = useRef(null);

  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const [hoveredItem, setHoveredItem] = useState(serviceContent[0]);

  const handleHover = useCallback((name, index) => {
    const hovered = serviceContent.find((item) => item.name === name);
    setHoveredItem(hovered);
    setActiveItemIndex(index);
  }, []);

  useLayoutEffect(() => {
    const setupScrollTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none restart",
          start: "top center",
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play pause restart none",
          scrub: false,
        },
      });

      tl2.fromTo(
        ".text-element",
        { rotationX: 90, opacity: 0 },
        { rotationX: 0, opacity: 1, duration: 3, transition: "none" }
      );

      tl.to(imagewrapperRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 2,
        ease: "expo.inOut",
      });

      const itemAnimation = gsap.to(itemRef.current.children, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
        },
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        stagger: 0.1,
        ease: "power2.out",
      });

      const containerColor = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 51%",
          end: "top 51%",
          markers: false,
          scrub: 1,
        },
      });

      containerColor.from(containerRef.current, {
        background: "#f0f0f0",
        direction: 3,
      });

      return () => {
        tl.kill();
        itemAnimation.kill();
      };
    };

    setupScrollTrigger();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const elements = useMemo(() => {
    return serviceContent.map((item) => (
      <div
        className={`${style.item} ${
          item.ID === activeItemIndex ? style.active : ""
        }`}
        key={item.ID}
        onMouseEnter={() => handleHover(item.name, item.ID)}
      >
        {item.name.toUpperCase()}
      </div>
    ));
  }, [activeItemIndex, handleHover]);

  return (
    <div className={`${style.container}`} ref={containerRef}>
      <div className={`text-element ${style.headLine}`}>SERVICE</div>
      <div className={style.leftContent} ref={itemRef}>
        {elements}
      </div>
      <div className={style.RightContent}>
        <div className={style.contentWrapper}>
          <div className={style.line}>
            <div className={style.line2} />
            <div className={style.content}>{hoveredItem.CONTENT}</div>
          </div>
        </div>
        <div className={style.imagewrapper} ref={imagewrapperRef}>
          <img
            src={hoveredItem.image}
            style={{
              opacity: hoveredItem ? 1 : 0,
            }}
            alt={hoveredItem.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
