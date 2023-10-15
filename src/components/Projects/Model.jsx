import { useGLTF, Html, Plane } from "@react-three/drei";
import * as THREE from "three";
import style from "./Model.module.css"
export default function Model(props) {
  const { nodes, materials } = useGLTF("/scfiprjt.glb");
  const isHovered = props.Hovered;

  return (
    <group {...props} dispose={null} >
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
        geometry={nodes.Cube.geometry}
        material={materials["Material.013"]}
        position={[6.432, 4.385, -0.217]}
        scale={[0.456, 0.176, 0.542]}
      >
      <Plane visible={false} scale={[33, 30, 3]} position={[-14.4,-25,0.2]}>
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/scfiprjt.glb");
