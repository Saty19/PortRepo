import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  Environment,
  PresentationControls,
  PerspectiveCamera,
} from "@react-three/drei";
import style from "./Projects.module.css";
import { Suspense } from "react";
import { useMemo } from "react";
import bg from "/background.png";

import { useRef } from "react";

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState({ name: "MAGENTO" });
  const ModelLoad = useMemo(() => {
    return lazy(() => import("./Model"));
  }, []);

  const nameComponentMap = [
    {
      ID: 1,
      name: "MAGENTO",
      CONTENT:
        "ContentAI is a Magento module that automates the content creation process for your website using OpenAI (Artificial Intelligence).",
    },
    {
      ID: 2,
      name: "REACT",
      CONTENT:
        "A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component. Requires a function",
    },
    {
      ID: 3,
      name: "ANGULAR",
      CONTENT:
        "Content projection is a pattern in which you insert, or project, the content you want to use inside another component. For example, you could have a Card ...",
    },
    {
      ID: 4,
      name: "PHP",
      CONTENT:
        "PHP files can contain text, HTML, CSS, JavaScript, and PHP code.PHP code is executed on the server, and the result is returned to the browser as plain HTML.",
    },
    {
      ID: 5,
      name: "LARAVEL",
      CONTENT:
        "Laravel is a PHP web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the ...",
    },
  ];
  const container= useRef(null)
  const img= useRef(null)
  

  const handleHover = (name) => {
    // Find the item with the matching name
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
              <EffectComposer smaa>
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
