import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const services = () => {
  return (
    <section id="services">
      <h5>What I Have To Offer</h5>
      <h2>Services</h2>

      <div className="container services_container" data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="350" data-aos-duration="2000">
          <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className="service_list">
              <li>
                <FaCheck className='service_list-icon' />
                <p>Custom Website Development</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Content Management Systems</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>E-commerce web Solutions</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Website host Security system</p>
              </li>
              <li>
                <FaCheck className='service_list-icon' />
                <p>Web performance Optimization</p>
              </li>
            </ul>
          </article>

        <article className="service">
          <div className="service_head">
            <h3>UI / UX</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className='service_list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>User Experience (UX) Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Interactive Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Mobile App Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Graphic Design</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>MANAGEMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheck className='service_list-icon' />
              <p>Content Creation</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Platform Management</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Community Engagement</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Analytics and Reporting</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Social Media Strategy</p>
            </li>
            <li>
              <FaCheck className='service_list-icon' />
              <p>Advertising Campaign</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services