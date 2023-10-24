/* eslint-disable react/prop-types */
import style from "./Model.module.css";
import  { useRef } from "react";
import { Html, Plane, useGLTF } from "@react-three/drei";
import Service from "../Service/Service";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/laptop.glb");
  
  const isHovered = props.Hovered;
  return (
    <group {...props} dispose={null} scale={[2,2,2]} >
    <group rotation={[-Math.PI, 0, -3.135]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_BottomPart_Cube001.geometry}
      material={materials["Black.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_BottomPart_Cube001_1.geometry}
      material={materials["Main.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_BottomPart_Cube001_2.geometry}
      material={materials["Second.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_BottomPart_Cube001_3.geometry}
      material={materials["KeysMain.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_BottomPart_Cube001_4.geometry}
      material={materials["KeysBottom.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_BottomPart_Cube001_5.geometry}
      material={materials["TopLine.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_BottomPart_Cube001_6.geometry}
      material={materials["DarkGrey.001"]}
    />
  </group>
  <group rotation={[-Math.PI, 0, -3.135]}>
      <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001.geometry}
      material={materials["Outline.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_1.geometry}
      material={materials["Screen.001"]}
    >
   
    <Html
        className={style.htmlMain}
        position={[0, 1, -0.1]} transform occlude 
        rotation-y={91.1} 
     
        scale={0.07}
        center
        style={{ opacity: "0.8", width: "1920px", height: "1100px" }}
      >
        <div
          style={{ height: "100%" ,fontSize:"2vw"}}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {isHovered?.name==="MAGENTO" && <Service/> }
        </div>
      </Html>
     
    </mesh>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_2.geometry}
      material={materials["Emission.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_3.geometry}
      material={materials["Logo.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_4.geometry}
      material={materials["Main.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_5.geometry}
      material={materials["Text.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_6.geometry}
      material={materials["Camera.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_7.geometry}
      material={materials["Camera1.001"]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.macBook_TopPart_Cube001_8.geometry}
      material={materials["CameraGreen.001"]}
    />
  </group>
    </group>
  );
}

useGLTF.preload("/laptop.glb");



