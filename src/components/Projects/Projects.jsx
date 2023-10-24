import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  PerspectiveCamera,
  
} from "@react-three/drei";
import style from "./Projects.module.css";
import { Suspense } from "react";
import { useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nameComponentMap } from "./Content/content";
import { useRef } from "react";

export const Bloom = lazy(() =>
  import("@react-three/postprocessing").then((module) => ({
    default: module.Bloom,
  }))
);
export const EffectComposer = lazy(() =>
  import("@react-three/postprocessing").then((module) => ({
    default: module.EffectComposer,
  }))
);

const Projects = () => {
  const container = useRef(null);
  const img = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const [hoveredItem, setHoveredItem] = useState({
    name: "MAGENTO",
    CONTENT:
      "ContentAI is a Magento module that automates the content creation process for your website using OpenAI (Artificial Intelligence).",
  });

  const ModelLoad = useMemo(() => {
    return lazy(() => import("./Model"));
  }, []);

  const handleHover = (name,index) => {
    const hovered = nameComponentMap.find((item) => item?.name === name);
    setHoveredItem(hovered);
    setActiveItemIndex(index)
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "50% 50%",
        scrub: 3,
      },
    });
    tl.to(img.current, { bottom: "-100%", ease: "linear" });
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      tl.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.container} ref={container}>
      <div className={style.headLine}>PROJECT</div>
      
      <div className={style.listItem}>
        {nameComponentMap.map((item) => (
          <div
            key={item?.ID}
            onMouseEnter={() => handleHover(item?.name,item.ID)}
            className={`${style.Item} ${ item.ID==activeItemIndex?style.active:''} `}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className={style.CanvaContainer}>
        <Canvas
          
          className={style.canvas}
          size={{ width: window.innerWidth, height: window.innerHeight }}
          background="rgba(0, 0, 0, 0)"
        >
          <PerspectiveCamera
            makeDefault
            fov={55} // Field of view
            near={0.1} // Near clipping plane
            far={1000} // Far clipping plane
            position={[0, 1, 20]}
           
          />

          {
            windowWidth<=820?(
              <Suspense fallback={null}>
              <EffectComposer smma>
                <Bloom intensity={0.1} luminanceThreshold={0.5} />
                <group rotation={[0, 270, 0]} position={[0, 1, 0]}>
                  <ModelLoad Hovered={hoveredItem} Scale={3.5}/>
                </group>
              </EffectComposer>
            </Suspense>
            ):(
              <PresentationControls
              config={{ mass: 2, tension: 1000 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0.2, -0.1, 0]}
              polar={[0, Math.PI / 7]} // Adjust the polar property to limit the vertical rotation
              azimuth={[-Math.PI / 1.5, Math.PI / 2]}
            >
              <Suspense fallback={null}>
                <EffectComposer smma>
                  <Bloom intensity={0.1} luminanceThreshold={0.5} />
                  <group rotation={[0, 270, 0]} position={[0, 1, 0]}>
                    <ModelLoad Hovered={hoveredItem} />
                  </group>
                </EffectComposer>
              </Suspense>
            </PresentationControls>)
        
        
        }
        
          <Environment preset="city" />
        </Canvas>
      </div>
      <div className={style.rightcontent}>
        {hoveredItem && (
          <div>
            <h2>{hoveredItem.name}</h2>
            <p>{hoveredItem.CONTENT}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
