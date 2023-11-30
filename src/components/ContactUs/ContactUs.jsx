import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './Contact.module.css';
import SmoothScroll from '../Scroll/SmoothScroll';
import { gsap } from 'gsap';

const ContactUs = () => {
  const form = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAIL_SERVICE,
        import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);

          // Automatically hide the popup after 2 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <SmoothScroll>
      <div ref={containerRef} className={style.container}>
        <div className={style.indiaSvg}>
          {/* Include your India SVG here */}
          {/* <img src="/path/to/india.svg" alt="India SVG" className={style.indiaSvg} /> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>

        {showPopup && <div className={style.popup}>Thank you!</div>}
      </div>
    </SmoothScroll>
  );
};
export default ContactUs;