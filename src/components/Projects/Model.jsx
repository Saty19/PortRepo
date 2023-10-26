/* eslint-disable react/prop-types */
import style from "./Model.module.css";
import  { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import Service from "../Service/Service";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
export default function Model(props) {
  const { nodes, materials } = useGLTF("/laptop.glb");
  const group = useRef()
  const update = (state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 7 + 0.25 : 0, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 2 : 0, 0.1);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 4 : 0, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -7, 0.6);
  };

  // Use useFrame with the update function
  useFrame(update);

  // Clean up when the component unmounts
  useEffect(() => {
    return () => {
      // Unsubscribe from the animation here
      // useFrame.unsubscribe(update);
    };
  }, []);


  const scale=props.Scale
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(()=>{
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    return ()=>{
      window.removeEventListener('resize', handleResize);
    }

  },[])
  const isHovered = props.Hovered;

  return (
    <group ref={group} {...props} dispose={null} scale={windowWidth<=820?scale:2} rotation-x={19}>
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

    >
   
    <Html
        className={style.htmlMain}
        position={[0, 1.23, -0.005]} transform occlude 
        rotation-y={91.1} 
        rotation-x={94.35}
        scale={0.07}
        center
        style={{ width: "96vw", height: "125vh"}}
      >
        <div
          style={{ height: "100%" ,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}
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



