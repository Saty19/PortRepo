import  { useState, useCallback, useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Service.module.css";
import { serviceContent } from "./servicecontent";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const containerRef = useRef(null);
  const imagewrapperRef = useRef(null);
  const isMobile = window.matchMedia("(max-width: 820px)").matches;
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = useCallback((name, index) => {
    const hovered = serviceContent.find((item) => item.name === name);
    setHoveredItem(hovered);
    setActiveItemIndex(index);
  }, []);

  const nothovered = () => {
    setHoveredItem(null);
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left + (window.innerWidth < 768 ? 0 : 200);

    const maxOffsetY =
      window.innerWidth === 768
        ? 500
        : window.innerWidth < 1400
        ? 100
        : 300;

    const offsetY = Math.min(
      maxOffsetY,
      Math.max(
        -maxOffsetY,
        e.clientY - rect.top - (window.innerWidth < 768 ? 0 : 80)
      )
    );

    if (!isMobile) {
      gsap.to(imagewrapperRef.current, {
        x: offsetX,
        y: offsetY,
        duration: 1,
      });
    }
  };

  useEffect(() => {
    const setupScrollTrigger = () => {
      if (isMobile) {
        gsap.to(imagewrapperRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
          },
          y: window.innerHeight/1.5, // Adjust this value as needed
        });
      

      gsap.utils.toArray(`.${style.item}`).forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => handleHover(serviceContent[index].name, index + 1),
          onLeaveBack: () => nothovered(),
        });

        // Add scrollTrigger for the hover effect
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(item, {
              backgroundColor: "#f0f0f0",
              color: "#121212",
            });
          },
          onLeaveBack: () => {
            gsap.to(item, {
              backgroundColor: "#f0f0f0",
              color: "#121212",
            });
          },
          onLeave: () => {
            gsap.to(item, {
              backgroundColor: "#121212",
              color: "#ffffff",
            });
          },
        });
      });}
    };

    setupScrollTrigger();
  }, [handleHover, isMobile, nothovered]);

  return (
    <div
      className={style.container}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className={style.headline}>SERVICE</div>
      <div className={style.itemWrapper}>
        {serviceContent.map((item) => (
          <div
            className={`itemService ${style.item} ${item.ID === activeItemIndex ? style.active : ""}`}
            key={item.ID}
            onMouseEnter={(e) => {
              handleHover(item.name, item.ID);
              e.stopPropagation();
            }}
            onMouseLeave={nothovered}
          >
            {item.name.toUpperCase()}
          </div>
        ))}
      </div>
      <div
        className={style.imagewrapper}
        ref={imagewrapperRef}
        style={{
          opacity: isMobile ? (hoveredItem ? 1 : 0) : hoveredItem ? 1 : 0,
        }}
      >
        <img
          src={hoveredItem?.image}
          style={{
            opacity: isMobile ? (hoveredItem ? 1 : 0) : hoveredItem ? 1 : 0,
          }}
          alt={hoveredItem?.name}
        />
        <div
          className={style.content}
          style={{
            opacity: isMobile ? (hoveredItem ? 1 : 0) : hoveredItem ? 1 : 0,
          }}
        >
          {hoveredItem?.CONTENT}
        </div>
      </div>
    </div>
  );
};

export default Service;
