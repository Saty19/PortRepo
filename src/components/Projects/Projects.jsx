import React, { lazy,useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, PerspectiveCamera } from '@react-three/drei';
import style from './Projects.module.css';
import { Suspense } from 'react';
import { useMemo } from 'react';



const Projects =  () => {
  const [isHovered, setIsHovered] = useState('');
  const ModelLoad= useMemo(()=>{
   return lazy(()=> import ("./Model"))
  },[])


  const nameComponentMap = {
    MAGENTO: "ABOUT",
    REACT: "REACT",
    ANGULAR: "ANGULAR",
    PHP: "PHP",
    LARAVEL: "LARAVEL",
  };

  const handleHover = (name) => {
    setIsHovered(name);
  };
  const image1="https://wstatic-prod.pubg.com/web/live/main_e688ade/img/1297764.png"
  return (
    <div className={style.container}>
    <div className={style.image}>
    <img src={image1} />
    </div>
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
          style={{  touchAction: "none" }}
          size={{ width: window.innerWidth, height: window.innerHeight }}
        >
          <PerspectiveCamera
            makeDefault
            fov={55} // Field of view
            near={0.1} // Near clipping plane
            far={1000} // Far clipping plane
            position={[0,0,30]}
          />
        
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
          <Suspense fallback={null}>
          <group rotation={[0,270, 0]} position={[0, 1, 0]}>
              <ModelLoad Hovered={nameComponentMap[isHovered]} />
              </group>
              </Suspense>
          </PresentationControls>
          <Environment preset="city" />
          <ContactShadows position={[0, -4.6, 0]} scale={20} blur={2} far={4.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default Projects;





