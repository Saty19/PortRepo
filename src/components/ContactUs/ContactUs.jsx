import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css"

export const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hqkcni7', 'template_p928fwo', form.current, 'm82mIDSiTDJ48YBJ2')
    .then((result) => {
      console.log(result.text);
      setShowPopup(true);

      // Automatically hide the popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
  }, (error) => {
      console.log(error.text);
  });
};

return (
<div className={style.container}>
  <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  
  {showPopup && (
    <div className={style.popup}>
      Thank you!
    </div>
  )}
</div>
  );
};