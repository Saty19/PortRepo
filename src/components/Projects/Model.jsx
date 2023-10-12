
import React, { useRef,useMemo } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Model = React.memo((props) => {

  const { nodes, materials } = useMemo(() => useGLTF("./old_computer.glb"), []);
  const group = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y += 0.005

  })
  return (
    <group {...props} dispose={null}>
    <group
      position={[-400.642, 4.317, -600.653]}
      rotation={[-1.527, 0, -Math.PI / 2]}
    >
      <group rotation={[Math.PI / 2, 0, 0]}  >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_Accessories002_0.geometry}
          material={materials["Accessories.002"]}
          position={[300.179, -157.86, -500.985]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={18.866}
        />
        <mesh ref={group}
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Television002_0.geometry}
          material={materials["Television.002"]}
          position={[42.439, 207.866, -316.892]}
          scale={[4.899, 4.899, 4.743]}
        >

        </mesh>
      </group>
    </group>
  </group>
  )
})

useGLTF.preload("./old_computer.glb");

export default Model
