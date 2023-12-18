import React from 'react'
import './contact.css'
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Tilt } from 'react-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_whug0lu', 'template_97c1l81', form.current, 'anlsevVaaWct4EC4G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>
        Contact
      </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <Tilt>
          <article className="contact_option">
            <IoIosMailUnread  className='contact_option-icon'/>
            <h4>E-Mail</h4>
            <h5>ayusharshita14@gmail.com</h5>
            <a href="mailto:ayuaharshita14@gmail.com" target='_blank'>Send Message</a>
          </article>
          </Tilt>
          <Tilt>
          <article className="contact_option">
            <FaWhatsapp  className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Ayush P.S</h5>
            <a href="https://wa.me/9460865839" target='_blank'>Send Message</a>
          </article>
          </Tilt>
          <Tilt>

          <article className="contact_option">
            <FaInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>ayuxh_pratap_</h5>
            <a href="https://www.instagram.com/ayuxh_pratap_/" target='_blank'>Send Message</a>
          </article>
          </Tilt>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Nmae' required data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000"/>
          <input type="email" name='email' placeholder='Your Email' required data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000"/>
          <textarea name="message" rows="16" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact