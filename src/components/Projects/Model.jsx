/* eslint-disable react/prop-types */
import style from "./Model.module.css";
import  { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
// import Service from "../Service/Service";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import TallComponent from "./LaptopComponent/TallComponent ";
import TestMagento from "./LaptopComponent/TestMagento";


export default function Model(props) {
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  const group = useRef()
  const update = (state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 8 + 0.35 : 0, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 2 : 0, 0.1);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 4 : 0, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 5 : -7, 0.6);
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

  //enum 
  const views={
    MAGENTO:TallComponent,
    REACT:TestMagento,
    ANGULAR:TallComponent,
    PHP:TallComponent,
    LARAVEL:TallComponent,
  }


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
  const isHovered = props?.Hovered;
  const CurrentView=views[isHovered?.name]
  return (
    <group ref={group} {...props} dispose={null}>
    <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
        <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
        <mesh geometry={nodes['Cube008_2'].geometry}>
          <Html className={style.content}s rotation-x={-Math.PI / 2} position={[0.4,0.25,-0.01]} transform occlude>
            <div className={style.wrapper} onPointerDown={(e) => e.stopPropagation()}>
            {isHovered?.name=='MAGENTO' && <TestMagento/>}
            </div>
          </Html>
        </mesh>
      </group>
    </group>
    <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
    <group position={[0, -0.1, 3.39]}>
      <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
      <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
    </group>
    <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
  </group>
  );
}

useGLTF.preload("/mac-draco.glb");



