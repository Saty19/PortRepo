import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import style from './ThreeElement.module.css'

const ThreeElement = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
      const canvasElement = canvasRef.current;
      
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true});
      
      const updateCanvasSize = () => {
          const { width, height } = canvasElement.getBoundingClientRect();
          canvasElement.width = width;
          canvasElement.height = height;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        };
        const controler =new OrbitControls(camera,renderer.domElement)

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    renderer.setSize(canvasElement.width, canvasElement.height);
    canvasElement.appendChild(renderer.domElement);
    
    const geometry = new THREE.TorusGeometry();
    const material = new THREE.MeshStandardMaterial({color:0xffffff,wireframe:true});
    const cube = new THREE.Mesh(geometry, material);
    cube.scale.set(1.2,1.2,1.2)
    scene.add(cube);
    const light = new THREE.DirectionalLight({color:0xfffff},10)
    light.position.set(2,2,0)
    scene.add(light)
    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      controler.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return <div className={` ${style.canvas}`} ref={canvasRef}></div>;
};

export default ThreeElement;