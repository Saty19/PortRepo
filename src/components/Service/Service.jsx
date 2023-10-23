import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Service.module.css";
import { serviceContent } from "./servicecontent";

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Service() {
  const container = useRef(null);
  const imagewrapper = useRef(null);
  const ITEM = useRef(null);

  const [activeItemIndex, setActiveItemIndex] = useState(1);
  // Function to update screen width when the window is resized
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  const [HoveredItem, setHoveredItem] = useState({
    ID: 1,
    name: "Web App & Design",
    CONTENT:
      "ContentAI is a Magento module that automates the content creation process for your website using OpenAI (Artificial Intelligence).",
    image:
      "https://cdn.pixabay.com/photo/2020/11/07/01/28/abstract-5719221_640.jpg",
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
      },
    });
    tl.to(imagewrapper.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 2,
      ease: "expo.inOut",
    });

    gsap.to(ITEM.current.children, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 40%",
      },
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      stagger: 0.1,
      ease:"power2.out"
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleHover = (name, index) => {
    const hovered = serviceContent.find((item) => item?.name === name);
    setHoveredItem(hovered);
    setActiveItemIndex(index);
  };

  return (
    <div className={`${style.container}`} ref={container}>
      <div className={style.headLine}>SERVICE</div>
      <div className={style.leftContent} ref={ITEM}>
        {serviceContent.map((item) => (
          <div
            className={`${style.item} ${
              item.ID == activeItemIndex ? style.active : ""
            } `}
            key={item.ID}
            onMouseEnter={() => handleHover(item.name, item.ID)}
          >
            {item.name.toUpperCase()}
          </div>
        ))}
      </div>
      <div className={style.RightContent}>
        <div className={style.contentWrapper}>
          <div className={style.line}>
            <div className={style.line2} />
            <div className={style.content}>
              {HoveredItem && HoveredItem.CONTENT}
            </div>
          </div>
        </div>
        <div className={style.imagewrapper} ref={imagewrapper}>
          <img
            src={HoveredItem && HoveredItem.image}
            style={{
              opacity: HoveredItem ? 1 : 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
