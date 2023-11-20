import { lazy, useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nameComponentMap } from "./Content/content";
import style from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);
  const maskingSquare = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const [hoveredItem, setHoveredItem] = useState({
    name: "MAGENTO",
    CONTENT:
      "ContentAI is a Magento module that automates the content creation process for your website using OpenAI (Artificial Intelligence).",
  });

  const ModelLoad = lazy(() => import("./Model"));

  const handleHover = (name, index) => {
    const hovered = nameComponentMap.find((item) => item?.name === name);
    setHoveredItem(hovered);
    setActiveItemIndex(index);
  };

  useEffect(() => {
    // Refresh ScrollTrigger on component updates
    ScrollTrigger.refresh();
  }, [/* add relevant dependencies */]);

  useEffect(() => {
    // Set up animations with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
        end: "50% 50%",
        scrub: 1,
        markers: false, 
      },
    });

    // Animation for the leftContainer
    tl.fromTo(
      ".leftContainer",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );

    // Animation for the maskingSquare
    tl.fromTo(
      maskingSquare.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 },
      "<"
    );

    return () => {
      // Clean up the animation timeline on component unmount
      tl.kill();
    };
  }, [container, maskingSquare]);

  return (
    <div className={style.container} ref={container}>
      <div className={`${style.leftContainer} leftContainer`}>
        <div className={style.itemWrapper}>
          {nameComponentMap.map((item) => (
            <div
              key={item?.ID}
              onMouseEnter={() => handleHover(item?.name, item.ID)}
              className={`${style.Item} ${
                item.ID === activeItemIndex ? style.active : ""
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className={style.rightContainer} ref={maskingSquare}>
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
              size={{ width: window.innerWidth, height: window.innerHeight }}
              background="rgba(0, 0, 0, 0)"
            >
              <PerspectiveCamera
                makeDefault
                fov={55}
                near={0.1}
                far={1000}
                position={[0, 1, 20]}
              />
              <directionalLight color={"white"} intensity={1} position={[2, 10, 4]} />

              {windowWidth <= 820 ? (
                <Suspense fallback={null}>
                  <group rotation={[0, 280, 0]} position={[0, 1, 0]}>
                    {<ModelLoad Hovered={hoveredItem} Scale={2.5} />}
                  </group>
                </Suspense>
              ) : (
                <PresentationControls
                  config={{ mass: 2, tension: 1000 }}
                  snap={{ mass: 4, tension: 1500 }}
                  rotation={[0.1, -0, 0]}
                  polar={[0, Math.PI / 10]}
                  azimuth={[-Math.PI / 5, Math.PI / 5]}
                >
                  <Suspense fallback={null}>
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
