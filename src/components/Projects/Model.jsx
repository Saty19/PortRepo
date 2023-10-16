import { useGLTF, Html, Plane } from "@react-three/drei";
import * as THREE from "three";
import style from "./Model.module.css";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Model(props) {
  const { nodes, materials } = useGLTF("./TEST.glb");
  const group = useRef()
  const first = useRef()
  const sec = useRef()
  const isHovered = props.Hovered;
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 25) / 45, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 10) / 50, 0.8)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 7, 0.8)
    first.current.rotation.y +=0.01
    sec.current.rotation.y += -0.01
  })

  return (
    <group {...props} dispose={null} ref={group}>
      <group scale={[10,10,10]} rotation-x={-276}  rotation-z={45}>
      <group ref={first}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.005"]}
          rotation={[0, -1.4, 0]}
          scale={1.1}
          userData={{ name: "Circle" }}
        />
        </group>
        <group ref={sec}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Material.006"]}
          position={[0, 0.1, 0]}
          scale={[0.9, 1.1, 0.9]}
          userData={{ name: "Circle.001" }}
        />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials["Material.007"]}
          position={[0, 0.3, 0]}
          scale={0.4}
          userData={{ name: "Circle.002" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials["Material.008"]}
          position={[0, 0.2, 0]}
          scale={0.7}
          userData={{ name: "Circle.003" }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={materials["Material.009"]}
          position={[0, 0.3, 0]}
          scale={0.2}
          userData={{ name: "Circle.004" }}
        >
          <Plane
            visible={false}
            scale={[10, 10, 1]}
            position={[0, 2, -2]}
          >
            <Html
              className={style.htmlMain}
              rotation-x={-Math.PI * 2}
              position={[0.0001, 0, 1]}
              transform
              scale={0.08}
              center
              style={{ opacity: "0.8", width: "100%", height: "100%" }}
            >
              <div
                style={{ height: "100%" }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                {isHovered}
              </div>
            </Html>
          </Plane>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./TEST.glb");
