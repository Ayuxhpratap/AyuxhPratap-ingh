import React from 'react'
import CV from '../../assets/CV.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CTA = () => {
  return (
    <div className="cta te-blur">
      <a href={CV} download className='btn bo-blur'>Download CV</a>
      <a href="#contact" className='btn btn-primary bo-blur'>Let's Talk</a>
    </div>
  )
}

export default CTA
