
import { OrbitControls } from "@react-three/drei"
import style from "./About.module.css"
import { BoxGeometry, Mesh, MeshNormalMaterial } from 'three'

const About = () => {
  return (
    <>
    <OrbitControls/>
    <directionalLight position={[2,3,4]} intensity={2} />
     <mesh>
     <boxGeometry/>
     <meshStandardMaterial/>
     </mesh>
    </>
  )
}

export default About
