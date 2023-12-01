import React, { useEffect, useRef } from "react";
import styles from "./Testimonial.module.css";
import { NavLink } from "react-router-dom";

const TestimonialCarousel = () => {
  const buttonRef = useRef(null);
  const buttonWrapper = useRef(null);
  const buttonName = useRef(null);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const button = buttonRef.current;
      const xAxis = -(window.innerWidth / 2 - e.pageX) / 80;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 1500;
      const ybAxis = (window.innerHeight / 2 - e.pageY) / 2000;

      if (button) {
        button.style.transform = `translateX(${xAxis}px) translateY(${ybAxis}px)`;
      }

      if (buttonName.current) {
        buttonName.current.style.transform = `translateX(-${
          xAxis + 1
        }px) translateY(${yAxis}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.MainContent}>
        LOOKING FOR A POWERFUL WEBSITE?
        <div className={styles.SubContent}>
          WE DESIGN STUNNING WEBSITES THAT CAPTURE YOUR AUDIENCE'S ATTENTION AND
          CONVERT THEM INTO CUSTOMERS. OUR DESIGNS ARE CLEAN & MODERN.
        </div>
      </div>
      <div className={styles.buttonWrapper} ref={buttonWrapper}>
        <NavLink to="/PortRepo/contact" className={styles.contactButton} ref={buttonRef} onClick={handleNavLinkClick}>
          <div className={styles.buttonName} ref={buttonName}>
            LET'S TALK
          </div>
        </NavLink>

        <h3>Can't wait to hear from you. Let's try it!</h3>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
