

import React from 'react';
import style from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footerContent}>
          <div className={style.footerLogo}>
            {/* Your futuristic logo or graphic */}
            <img src="path/to/logo.png" alt="Futuristic Logo" />
          </div>
          <div className={style.footerInfo}>
            {/* Your contact information or links */}
            <p>Contact: satyasenapati58@gmail.com</p>
            <p>
              Follow us on: <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>,{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </div>
          <div className={style.footerSocial}>
          
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
