import React from 'react'
import './experience.css'
/* import { LiaAccessibleIcon } from "react-icons/lia";
import { BsBalloonFill } from "react-icons/bs"; */
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Tilt } from 'react-tilt'


const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}



const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Posses</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <Tilt>
        <div className="experience_frontend">
          <h3>Front-End</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>HTML</h4>
                <small className='text-light'>God-Tired</small></div>
            </article>
            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>CSS</h4>
                <small className='text-light'>Master</small></div>
            </article>
            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>JavaScript</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>React</h4>
                <small className='text-light'>InterMediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Next JS</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

          </div>

        </div>
        </Tilt>
        <Tilt>
        <div className="experience_backend">
          <h3>UI / UX</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>FIGMA</h4>
                <small className='text-light'>God-Tired</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WireFrame</h4>
                <small className='text-light'>Master</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>Adobe</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WebFlow</h4>
                <small className='text-light'>InterMediate</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WordPress</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

            <article className='experience_details'>
              <BsFillBrightnessHighFill className='experience_details-icon' />
              <div><h4>WixStudio</h4>
                <small className='text-light'>Beginner</small></div>
            </article>

          </div>

        </div>
        </Tilt>
      </div>
    </section>
  )
}

export default experience