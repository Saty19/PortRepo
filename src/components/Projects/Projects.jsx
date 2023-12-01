import React, { lazy, useState, useRef, useEffect, useLayoutEffect, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nameComponentMap } from "./Content/content";
import style from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerPrjtRef = useRef(null);
  const maskingSquareRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const [hoveredItem, setHoveredItem] = useState({
    name: "MAGENTO",
    CONTENT: "ContentAI is a Magento module that automates the content creation process for your website using OpenAI (Artificial Intelligence).",
  });

  const ModelLoad = lazy(() => import("./Model"));

  const handleHover = useCallback((name, index) => {
    const hovered = nameComponentMap.find((item) => item?.name === name);
    setHoveredItem(hovered);
    setActiveItemIndex(index);
  }, []);

  const handleWindowResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const setupAnimations = useLayoutEffect(() => {
    // Set up animations with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerPrjtRef.current,
        start: "top 60%",
        end: "50% 50%",
        toggleActions: "play restart none none",
        scrub: 1,
        markers: false,
      },
    });

    // Animation for the leftContainer
    tl.fromTo(".leftContainer", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });

    // Animation for the maskingSquare
    tl.fromTo(maskingSquareRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 }, "<");
  }, [containerPrjtRef, maskingSquareRef]);

  return (
    <div className={style.container} ref={containerPrjtRef}>
      <div className={`${style.leftContainer} leftContainer`}>
        <div className={style.itemWrapper}>
          {nameComponentMap.map((item) => (
            <div
              key={item?.ID}
              onMouseEnter={() => handleHover(item?.name, item.ID)}
              className={`${style.Item} ${item.ID === activeItemIndex ? style.active : ""}`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className={style.rightContainer} ref={maskingSquareRef}>
        <div className={style.contentCavasWrapper}>
          <div className={style.description}>
            {hoveredItem && (
              <div className={`${style.bottomContent} `}>
                <h2 className={style.bottomFirstContent}>{hoveredItem.name}</h2>
                <p className={style.bottomLastContent}>{hoveredItem.CONTENT}</p>
              </div>
            )}
          </div>
          <div className={`${style.canvasWrapper}`}>
            <Canvas
              className={style.canvas}
              size={{ width: windowWidth, height: window.innerHeight }}
              background="rgba(0, 0, 0, 0)"
              camera={{ position: [0, 1, 20], fov: 55 }}
            >
              <directionalLight color={"white"} intensity={1} position={[2, 10, 4]} />
              {windowWidth <= 820 ? (
                <Suspense fallback={''}>
                  <group rotation={[0, 270, 0]} position={[0, 1, 7]}>
                    {<ModelLoad Hovered={hoveredItem} Scale={2.5} />}
                  </group>
                </Suspense>
              ) : (
                <PresentationControls
                  config={{ mass: 2, tension: 1000 }}
                  snap={{ mass: 4, tension: 1500 }}
                  rotation={[0.1, 0, 0]}
                  polar={[0, Math.PI / 10]}
                  azimuth={[-Math.PI / 5, Math.PI / 5]}
                >
                  <Suspense fallback={''}>
                    <group rotation={[0, 270, 0]} position={[0, 1, 0]}>
                      <ModelLoad Hovered={hoveredItem} />
                    </group>
                  </Suspense>
                </PresentationControls>
              )}
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
