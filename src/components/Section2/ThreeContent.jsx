import { useRef, useLayoutEffect } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { ContactShadows, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { easing, geometry } from 'maath';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
extend(geometry);

export default function ThreeContent() {
  return (
    <Canvas size={{ width: window.innerWidth, height: window.innerHeight }}>
      <PerspectiveCamera
        makeDefault
        fov={55}
        near={0.1}
        far={1000}
        position={[0, 1, 20]}
      />
      <directionalLight color={'white'} intensity={10} position={[2, 5, 4]} />
      <ContactShadows
        resolution={512}
        position={[0, -0, 0]}
        opacity={1}
        scale={2}
        blur={2}
        far={0.8}
      />
      <Model />
    </Canvas>
  );
}

function Model(props) {
  const group = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (window.innerWidth > 768) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 0.5) / 20 + 0.27,
        0.2
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 2) / 20,
        0.1
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        Math.sin(t / 8) / 20,
        0.1
      );
    }
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-8 + Math.sin(t / 2)) / 2,
      0.1
    );
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 2), 0],
      0.5,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.y * (Math.PI / 2), 0],
      0.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, -4, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
  });

  const { nodes, materials } = useGLTF('./HARMON_CRADON.glb');

  const existingMaterial = materials['Material.013'];

  if (existingMaterial) {
    existingMaterial.transparent = true;
    existingMaterial.opacity = 0.3;
  }
  return (
    <group ref={group} {...props} dispose={null} scale={1.2} position={[1, -2, 1]}>
      <group name="Scene">
        <group name="Circle" position={[-0.11, 0.432, 0.13]} rotation={[0, -0.966, 0]} scale={2.774}>
          <mesh name="Mesh" castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials['Material.004']} />
          <mesh name="Mesh_1" castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials['Material.007']} />
          <mesh name="Mesh_2" castShadow receiveShadow geometry={nodes.Mesh_2.geometry} material={materials['Material.011']} />
          <mesh name="Mesh_3" castShadow receiveShadow geometry={nodes.Mesh_3.geometry} material={materials.Material} />
        </group>
        <mesh
          name="Circle002"
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={existingMaterial}
          position={[-0.11, 2.139, 0.13]}
          rotation={[0, -0.966, 0]}
          scale={3.027}
        />
        <mesh name="Cube" castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Material.014']} position={[0.706, 1.211, 3.045]} rotation={[0, 0.216, 0]} scale={[0.05, 0.25, 0.05]} />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.015']}
          position={[0.1, 1.23, 3.171]}
          rotation={[Math.PI / 2, 0, -0.062]}
          scale={0.181}
        />
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Material.016']}
          position={[-0.104, 0.354, 0.13]}
          scale={3.002}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[-0.807, 1.233, 3.074]}
          rotation={[Math.PI / 2, 0, 0.221]}
          scale={[0.275, 1, 0.044]}
        />
      </group>
    </group>
  )
}
