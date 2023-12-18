import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">AYUSH</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ayush-pratap-singh-7716b2295/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Ayuxhpratap" target='_blank'><BsGithub /></a>
        <a href="https://www.instagram.com/ayuxh_pratap_/" target='_blank'><FaInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; AYUSH PRATAP SINGH , Btech CSE (1st Year) , ABESIT</small>
      </div>
    </footer>
  )
}

export default footer