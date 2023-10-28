import { useEffect, useRef } from "react";
import styles from "./Testimonial.module.css";

const TestimonialCarousel = () => {
  const buttonRef = useRef(null);
  const buttonWrapper = useRef(null);
  const buttonName = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (e) => {
      let xAxis = -(window.innerWidth / 2 - e.pageX) /   80;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 2000;
      let ybAxis = (window.innerHeight / 2 - e.pageY) / 50;
      button.style.transform = `translateX(${xAxis}px) translateY(${ybAxis}px)`;
      buttonName.current.style.transform = `translateX(-${xAxis+5}px) translateY(${yAxis}px)`;
    };



    document.addEventListener("mousemove", handleMouseMove);


    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contactContent}>Let's make your brand</div>
      <div className={styles.buttonWrapper} ref={buttonWrapper}>
        <a className={styles.contactButton} ref={buttonRef}>
          <div className={styles.buttonName}  ref={buttonName}>LET'S TALK</div>
          </a>
          <h3>Can't wait to hear from you. Let's try it!</h3>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
