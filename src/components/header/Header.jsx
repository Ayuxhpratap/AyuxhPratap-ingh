import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'
import BG from '../../assets/bg-prin.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_des">
          <h5>Hello I'm</h5>
          <h1 className='te-blur' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000">Ayush Pratap Singh</h1>
          <h5 className="text-light head_des" >
            "Where Code Meets Creativity: Navigating the Digital Frontier with Expert Web Development and UI/UX Design. Join Me on a Journey of Seamless Experiences, Crafted Pixel by Pixel, as We Redefine Digital Brilliance Together."</h5>
          <CTA />
        </div>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header