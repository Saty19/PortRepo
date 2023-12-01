import React from 'react';
import { FaReact } from 'react-icons/fa';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footerContent}>
          <div className={style.footerInfo}>
            <p>
              Follow us on: <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>,{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </div>
      
        </div>
        <div className={style.copyright}>
          {/* Copyright notice for Enigma Vision */}
          <p>&copy; 2023 Enigma Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
