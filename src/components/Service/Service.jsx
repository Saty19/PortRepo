import { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Service.module.css";
import { serviceContent } from "./servicecontent";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const containerRef = useRef(null);
  const imagewrapperRef = useRef(null);

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
    const offsetX = e.clientX - rect.left +  (window.innerWidth < 768 ? 0 :200);

    const maxOffsetY =   window.innerWidth === 768
    ? 500
    : window.innerWidth < 1400
    ? 100
    : 300;
    const offsetY = Math.min(
      maxOffsetY,
      Math.max(-maxOffsetY, e.clientY - rect.top - ( window.innerWidth < 768 ? 0 : 80))
    );

    gsap.to(imagewrapperRef.current, {
      x: offsetX,
      y: offsetY,
      duration: 1,
    });
  };

  useLayoutEffect(() => {
    const setupScrollTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play none none restart",
          start: "top center",
        },
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

      containerColor.fromTo(
        containerRef.current,
        {
          background: "#f0f0f0",
        },
        { background: "#121212", duration: 1 }
      );

      gsap.fromTo(
        containerRef.current.querySelectorAll(`.${style.item}`),
        {
          rotateX: 90,
        },
        {
          rotateX: 0,
          stagger: {
            each: 0.2,
            grid: "auto",
            from: "start",
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      return () => {
        tl.kill();
      };
    };

    setupScrollTrigger();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
            className={`${style.item} ${
              item.ID === activeItemIndex ? style.active : ""
            }`}
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
          opacity: hoveredItem ? 1 : 0,
        }}
      >
        <img
          src={hoveredItem?.image}
          style={{
            opacity: hoveredItem ? 1 : 0,
          }}
          alt={hoveredItem?.name}
        />
        <div
          className={style.content}
          style={{
            opacity: hoveredItem ? 1 : 0,
          }}
        >
          {hoveredItem?.CONTENT}
        </div>
      </div>
    </div>
  );
};

export default Service;
