import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pro-1.png'
import IMG2 from '../../assets/book-pro.png'
import IMG3 from '../../assets/linkedin-pro.png'
import IMG4 from '../../assets/linkedin-pro-2.png'
import IMG5 from '../../assets/portfolio-pro-1.png'

import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           "y",   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3> "Indibus: Advertising Excellence Unleashed"</h3>
          <p>Dive into the dynamic world of advertising with the Indibus project, a testament to innovation and visual brilliance. As the architect behind Indibus' online presence, I meticulously crafted a website that mirrors the company's commitment to excellence.</p>
          <div className="portfolio_item-cta">
            <a href="https://ayuxhpratap.github.io/INDIBUS-AYUSH" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/Ayuxhpratap/INDIBUS-AYUSH" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> "E-Book Emporium: Knowledge Elegance"</h3>
          <p>Embark on a digital literary journey with the E-Book Emporium project, a fusion of technology and literary finesse. Serving as the architect of this virtual bookstore, I endeavored to create an immersive experience for book enthusiasts. "Navigating the E-Book Emporium"</p>
          <div className="portfolio_item-cta">
            <a href="https://ayuxhpratap.github.io/E-Reads-Ayuxh/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/Ayuxhpratap/E-Reads-Ayuxh" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>"LinkPro: Your Professional Network"</h3>
          <p>Unveiling LinkPro, a revolutionary LinkedIn clone that sets the stage for professional networking in the digital age. As the creator of this dynamic platform, I aimed to capture the essence of connection and collaboration. LinkPro seamlessly mirrors the functionality of LinkedIn</p>
          <div className="portfolio_item-cta">
            <a href="https://ayuxhpratap.github.io/social-web-neo-brutalism/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/Ayuxhpratap/social-web-notlinkedin" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>"LinkPro: Your Professional Network"</h3>
          <p>Unveiling LinkPro, a revolutionary LinkedIn clone that sets the stage for professional networking in the digital age. As the creator of this dynamic platform, I aimed to capture the essence of connection and collaboration. LinkPro seamlessly mirrors the functionality of LinkedIn</p>
          <div className="portfolio_item-cta">
            <a href="https://ayuxhpratap.github.io/social-web-neo-brutalism/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/Ayuxhpratap/social-web-notlinkedin" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>"LinkPro: Your Professional Network"</h3>
          <p>Unveiling LinkPro, a revolutionary LinkedIn clone that sets the stage for professional networking in the digital age. As the creator of this dynamic platform, I aimed to capture the essence of connection and collaboration. LinkPro seamlessly mirrors the functionality of LinkedIn</p>
          <div className="portfolio_item-cta">
            <a href="https://ayuxhpratap.github.io/social-web-notlinkedin/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/Ayuxhpratap/social-web-notlinkedin" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
        
        <Tilt options={defaultOptions}>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3> "My Journey in Code: Crafting Portfolio"</h3>
          <p>Step into the beginnings of my coding odyssey with the creation of my personal portfolio. This project is a reflection of my journey as a budding developer, where each line of code represents a lesson learned and a skill honed. Navigating through the pages, you'll witness my commitment !!</p>
          <div className="portfolio_item-cta">
            <a href="https://ayuxhpratap.github.io/Portfolio-Ayush/" className="btn" target='_blank'>Open Web</a>
            <a href="https://github.com/Ayuxhpratap/Portfolio-Ayush" className="btn btn-primary" target='_blank'>GitHub</a>
          </div>
        </article>
        </Tilt>
      </div>
    </section>
  )
}

export default portfolio