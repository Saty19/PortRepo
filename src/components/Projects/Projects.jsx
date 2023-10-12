import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import Model from './Model';
import style from './Projects.module.css';

const Projects = () => {
  return (
    <div className={style.container}>
      <Canvas
        camera={{ position: [-10, 0, -25], fov: 75, far: 1000 }}
        style={{ position: 'absolute', zIndex: 200 }}
        size={{ width: window.innerWidth, height: window.innerHeight }}
      >
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <PresentationControls
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
            <Suspense fallback={<div>Loading 3D model...</div>}>
              <Model />
            </Suspense>
          </group>
        </PresentationControls>
        <Environment preset="city" />
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
};

export default Projects;
