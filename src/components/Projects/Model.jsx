/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/scfiprjt.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[9.506, 1.292, 3.378]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.012"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[9.506, 1.292, 3.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.013"]}
        position={[6.432, 4.385, -0.217]}
        scale={[0.456, 0.176, 0.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.014"]}
        position={[0.482, -6.486, 3.338]}
        rotation={[0.444, 0, 0]}
        scale={[9.255, 1.166, 2.393]}
      />
    </group>
  );
}

useGLTF.preload("/scfiprjt.glb");
