import { useState, useEffect, useRef } from "react";

import styles from "./NavBar.module.css";
import NavList from "./NavList";
import { scroller } from "react-scroll";


const Navbar = ({ IsButtonToggled }) => {
  const toggleNav = useRef(null);
  const bottomWrapper = useRef(null);
  const [isToggled, setIsToggled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 500,
      smooth: true,
    });
  };

  const toggle = () => {
    setIsToggled(!isToggled);
    IsButtonToggled(!isToggled);
  };

  useEffect(() => {
    const wrapperElement = bottomWrapper.current;

    if (isToggled) {
      wrapperElement.style.width = "10%";
      wrapperElement.style.alignItems = "initial";
      wrapperElement.style.padding = "initial";
    } else {
      wrapperElement.style.width = "100%";
      wrapperElement.style.alignItems = "center";
      wrapperElement.style.padding = "0";
    }
  }, [isToggled]);

  const navStyle = {
    position: isSticky ? "fixed" : "sticky",
    top: 0,
    left: 0,
    right: 0,
    background: "white",
    zIndex: 100,
  };
  const handleNavItemClick = (sectionName) => {
    // Scroll to the selected section
    scrollToSection(sectionName);
    console.log("i am clicked")
    // Hide the navigation bar when an item is clicked
    setIsToggled(false);
  };


  return (
    <nav style={navStyle}>
      <div
        className={
          isToggled ? `${styles.navMenuClose}` : `${styles.navMenuOpen}`
        }
      >
        <div className={styles.AllContentWrapper}>
          {isToggled ? (
            <div className={styles.leftNavwrapper} ref={toggleNav}>
              <div className={styles.navBox}>
                <div className={styles.exploreContent}>EXPLORE</div>

                <div className={styles.navListWrapper}>
                  <NavList scrollToSection={scrollToSection} toggle={toggle} />
                </div>
              </div>

              <div className={styles.linkNav}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  *FACEBOOK
                </a>
                <a href="http://www.linkedin.com/in/satyadarsan-senapati-a103701b3" target="_blank" rel="noopener noreferrer">
                  *LINKDIN
                </a>
                <a href="https://github.com/Saty19/" target="_blank" rel="noopener noreferrer">
                  *GITHUB
                </a>
                <a href="https://www.instagram.com/satya_senapati07?igsh=amh0b2Q0OHNwNWY3" target="_blank" rel="noopener noreferrer">
                  *INSTAGRAM
                </a>
              </div>

            </div>
          ) : (
            ""
          )}

          <div className={styles.bottomWrapper} onClick={toggle} ref={bottomWrapper}>
            {isToggled ? (
              <div className={styles.bottomWrapperLeftLine}></div>
            ) : (
              ""
            )}
            {isToggled ? "X" : "O"}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
