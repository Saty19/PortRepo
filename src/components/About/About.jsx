import * as THREE from 'three'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei'
import style from "./About.module.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'




function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useFrame(() => {
    ref.current.material.color.lerp(c.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.05)
  })
  return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
}

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 2 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group} >
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Image position={[2, 0, 1]} scale={3} url="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="https://images.unsplash.com/photo-1534669740902-e09e38a6a29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Image position={[0, -height * 2 - height / 6, 1.5]} scale={[width / 1.5, height / 5, 1]} url="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60 " />
    </group>
  )
}

export default function About() {
  const snap =useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      start: "center center",
      end: "center top",
      toggleActions: "play none reverse none",
      onEnter: () => {
      
        console.log("hello");
       
      },
    });
  }, []);



  return (
    <div ref={snap}  className={style.container}>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}  className={style.scroll} >
        <Suspense fallback={null}>
        
            <ScrollControls damping={1} pages={3}>
              <Scroll>
                <Images />
              </Scroll>
              <Scroll html>
                <h1 style={{ position: 'absolute', top: '50vh', left: '80vw' ,fontSize:"4em",transition:"none" ,color:"black",mixBlendMode: "difference"}}>CREATE</h1>
                <h1 style={{ position: 'absolute', top: '80vh', left: '10vw' ,fontSize:"4em" ,transition:"none",color:"black",mixBlendMode: "difference"}}>TEST</h1>
                <h1 style={{ position: 'absolute', top: '40vh', left: 'vw', fontSize: '5em',transition:"none" ,color:"black",mixBlendMode: "difference"}}>HELLO</h1>
              </Scroll>
            </ScrollControls>

          <Preload />
        </Suspense>
      </Canvas>
    </div>
  )
}
