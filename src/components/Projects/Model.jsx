/* eslint-disable react/prop-types */
import style from "./Model.module.css";
import { useLayoutEffect, useRef, useState, useEffect, useMemo } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import TallComponent from "./LaptopComponent/TallComponent ";
import TestMagento from "./LaptopComponent/TestMagento";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./mac-draco.glb");
  const group = useRef();

  const update = (state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 2, 0.1);
  };

  // Use useFrame with the update function
  useFrame(update);

  // Enum 
  const views = {
    MAGENTO: TallComponent,
    REACT: TestMagento,
    ANGULAR: TallComponent,
    PHP: TallComponent,
    LARAVEL: TallComponent,
  };

  const scale = props.Scale;
  const isHovered = props?.Hovered;
  const CurrentView = useMemo(() => views[isHovered?.name], [isHovered?.name]);

  const Htmlposition = (window.innerWidth < 810) ? [0, 0.05, 0] : [0.35, 0.05, -0.5];

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Html className={style.content} rotation-x={-Math.PI / 2} position={Htmlposition} transform occlude>
              <div className={style.wrapper} onPointerDown={(e) => e.stopPropagation()}>
                {isHovered?.name === 'MAGENTO' && <TestMagento />}
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

useGLTF.preload("./mac-draco.glb");
