/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Glitch, SMAA } from "@react-three/postprocessing";
import { Environment, PresentationControls, PerspectiveCamera, } from "@react-three/drei";
import style from "./Projects.module.css";
import { Suspense } from "react";
import { useMemo } from "react";
import bg from "/background.png";
import { nameComponentMap } from "./Content/content"
import { useRef } from "react";

const Projects = () => {

  const container = useRef(null)
  const img = useRef(null)

  const [hoveredItem, setHoveredItem] = useState({
    name: "MAGENTO",
    CONTENT: "ContentAI is a Magento module that automates the content creation process for your website using OpenAI (Artificial Intelligence).",
  });


  const ModelLoad = useMemo(() => {
    return lazy(() => import("./Model"));
  }, []);


  const handleHover = (name) => {
    const hovered = nameComponentMap.find((item) => item.name === name);
    setHoveredItem(hovered);
  };

  return (
    <div className={style.container} ref={container}>
      <div className={style.image} ref={img}>
        <img src={bg} alt="" />
      </div>
      <div className={style.listItem}>
        {nameComponentMap.map((item) => (
          <div
            key={item.ID}
            onMouseEnter={() => handleHover(item.name)}
            className={style.Item}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className={style.CanvaContainer}>
        <Canvas
          style={{ touchAction: "none" }}
          className={style.canvas}
          size={{ width: window.innerWidth, height: window.innerHeight }}
          background="rgba(0, 0, 0, 0)"
        >

          <PerspectiveCamera
            makeDefault
            fov={55} // Field of view
            near={0.1} // Near clipping plane
            far={1000} // Far clipping plane
            position={[0, 0, 30]}
          />

          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Suspense fallback={null}>
              <EffectComposer>
                <SMAA/>
                <Bloom intensity={0.1} luminanceThreshold={0.5} />
                <group rotation={[0, 270, 0]} position={[0, 1, 0]}>
                  <ModelLoad Hovered={hoveredItem} />
                </group>
              </EffectComposer>
            </Suspense>
          </PresentationControls>

          <Environment preset="city" />
        </Canvas>
      </div>
      <div className={style.rightcontent}>
        <h1>PROJECT</h1>

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
