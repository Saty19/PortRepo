import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import Model from './Model';
import style from './Projects.module.css';
import About from '../About/About';
import Service from '../Service/Service';

const Projects = () => {
  const [isHovered, setIsHovered] = useState('');

  const nameComponentMap = {
    MAGENTO: <About />,
    REACT: <Service />,
    ANGULAR: "<h1>ANGULAR</h1>",
    PHP: "<h1>PHP</h1>",
    LARAVEL: "<h1>LARAVEL</h1>",
  };

  const handleHover = (name) => {
    setIsHovered(name);
  };

  return (
    <div className={style.container}>
      <div className={style.listItem}>
        {Object.keys(nameComponentMap).map((name) => (
          <div
            key={name}
            onMouseEnter={() => handleHover(name)}
            className={style.Item}
          >
            {name}
          </div>
        ))}
      </div>

      <div className={style.CanvaContainer}>
        <Canvas
          camera={{ position: [-10, 0, -25], fov: 55 }}
          style={{ position: 'absolute', zIndex: 200, touchAction: "none" }}
          size={{ width: window.innerWidth, height: window.innerHeight }}
        >
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <Model Hovered={nameComponentMap[isHovered]} />
            </group>
          </PresentationControls>
          <Environment preset="city" />
          <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default Projects;
