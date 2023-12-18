import React from 'react'
import './about.css'
import ME from '../../assets/me-7.jpg'
import { PiAlienBold } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { Tilt } from 'react-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <Tilt>
              <article className="about_card">
                <PiAlienBold className='about_icon' />
                <h5>Experince</h5>
                <small>12+ Months Working</small>
              </article>
            </Tilt>

            <Tilt>
              <article className="about_card">
                <PiUsers className='about_icon' />
                <h5>Clients</h5>
                <small>273+ Happy Clients</small>
              </article>
            </Tilt>

            <Tilt>
              <article className="about_card">
                <GoProjectRoadmap className='about_icon' />
                <h5>Projects</h5>
                <small>99+ AllDone Projects</small>
              </article>
            </Tilt>

          </div>
          <p className='text-light' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000">Ram Ram! I'm Ayush, a skilled web developer and UI/UX designer based in Uttar Pradesh, India. I approach each project with a passion for innovation, constantly seeking new opportunities to enhance my skills. Every line of code is a chance to exceed expectations and deliver work that goes beyond what clients and users anticipate. Let's create something exceptional together. <br /> <br /> Embrace the Power of Collaboration! I'm not just a developer and designer; I'm your creative partner. Have an idea? Let's bring it to life together! I thrive on turning your visions into digital masterpieces. Your concepts, my expertise – let's craft something extraordinary !!</p>

          <a href="#contact" className='btn btn-primary'>Hire Me!!</a>
        </div>
      </div>
    </section>
  )
}

export default about