import { useState,useEffect } from "react";

import styles from "./NavBar.module.css"; // Create a CSS file for styling
import NavList from "./NavList";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  //For Sticky and fixed

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  const navStyle = {
    position: isSticky ? 'fixed' : 'sticky',
    top: 0,
    left: 0,
    right: 0,
    background: 'white',
    zIndex: 100,
  };
//End the concept of Sticky and fixed
  

  return (
    <nav style={navStyle}>
      <div
        className={isToggled ? `${styles.navMenuTest}` : `${styles.navMenu}`}
      >
        <div className={styles.navBox}>
          <div>
            <button
              className={
                isToggled ? `${styles.buttonRight}` : `${styles.button}`
              }
              onClick={toggle}
            >
              {isToggled ? (
              
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 165 165"
                  fill="none"
                >
                  <path
                    d="M38.5 8.5L88 58.5L84.5 81.5L108.5 79L163.867 134.776L153 145.5L140 145.5L89.5 97L67 97L67 76.092L11.1322 20.2242L20.6782 10.6783L38.5 8.5Z"
                    fill="black"
                  />
                  <path
                    d="M11.1322 134.776L63 82.5L63 101.012L83.0801 101.012L35 148.5L26.5 151L11.1322 134.776Z"
                    fill="black"
                  />
                  <path
                    d="M92 55.856L144.856 3.00006L163.948 22.0919L111.092 74.9479L88.5 77L92 55.856Z"
                    fill="black"
                  />
                </svg>
              
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="25"
                  viewBox="0 0 194 147"
                  fill="none"
                >
                  <path
                    d="M0 0H194V13.5L175 27H112.5H97H83.5H0V0Z"
                    fill="black"
                  />
                  <path d="M0 60H90V80.5L82.5 87H0V60Z" fill="black" />
                  <path d="M0 120H145.5L160 133.5V147H0V120Z" fill="black" />
                </svg>
              )}
            </button>
          </div>
          {isToggled && <NavList Toggle={isToggled} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
