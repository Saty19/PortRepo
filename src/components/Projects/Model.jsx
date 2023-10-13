import React, { useRef } from "react";
import { useGLTF, Html, Plane } from "@react-three/drei";
import About from "../About/About";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./web.glb");
  const isHovered=props.Hovered

  // console.log(isHovered)

  return (

    <group {...props} dispose={null} scale={[3, 3, 3]} Hovered>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[0, -1.443, 1.613]}
        rotation={[0.371, 0, 0]}
        scale={[2.3, 0.017, 0.614]}
      >

      </mesh>
      <Plane visible={false}>
        <Html className="content" rotation-x={-Math.PI * 2} position={[0.0001, 0, 1]} transform scale={0.08} center style={{ opacity: "0.8", width: "4000px",height:"100%"}}
        >
          <div style={{height:"100%"}} onPointerDown={(e) => e.stopPropagation()}>
            {
              isHovered 
            }
          </div>
        </Html>
      </Plane>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
        rotation={[0.371, 0, 0]}
        scale={[2.3, 0.017, 0.614]}
      >

      </mesh>
    </group>
  );
}

useGLTF.preload("./web.glb");
