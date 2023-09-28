
import { useEffect, useState } from "react";
import style from "./Home.module.css"
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
const Home = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    }
  }, [])
  return (
    <div className={style.container}>

      <div className={style.mainContent}>
        <h2 className={style.topContent}>YOUR VISION OUR RESPONSIBILITY</h2>
        <h1 className={style.middleContent}>
          ENIGMA TECH
        </h1>
        <h2 className={style.bottomContent}>VISION</h2>

      </div>

      {screenWidth > 840 && (
        <div className={style.linkTag}>
          <FaFacebookSquare size={40} color="white" />
          <AiFillGithub size={40} color="white" />
          <AiFillInstagram size={40} color="white" />
        </div>
      )}
    </div>
  )
}

export default Home
