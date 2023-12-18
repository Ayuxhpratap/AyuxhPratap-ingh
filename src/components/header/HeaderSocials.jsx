import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/ayush-pratap-singh-7716b2295/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Ayuxhpratap" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/ayuxh_pratap_/" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials