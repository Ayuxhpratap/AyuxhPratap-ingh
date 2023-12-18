import React from 'react'
import './testimonials.css'
import AVATAR from '../../assets/linkedin.png'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Riview From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Working with Ayush was like injecting a burst of energy into our project! Their enthusiasm is infectious, turning what could have been mundane tasks into exciting milestones. The passion they bring to the table is a game-changer—our collaboration felt like a creative adventure, not just a project."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Creativity knows no bounds with Ayush. They took our ideas and transformed them into a digital masterpiece. Each design and line of code reflects a level of creativity that's not just visually stunning but also strategically brilliant. Ayush doesn't just follow trends; he set them."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Witnessing the never-ending nature of improvement with Ayush is like attending a symphony of progress. Their dedication to refining and enhancing our web presence was awe-inspiring. It's not just about delivering a project; it's about making it better with each iteration. Their commitment to improvement is truly commendable."
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR} alt="" /></div>
          <h5 className='client_name'>Private User</h5>
          <small className='client_review'>
            "Working with Ayush was a journey of continuous elevation. Their approach to web development, UI/UX, and social media management is nothing short of extraordinary. What sets them apart is their relentless pursuit of improvement; it's like having a partner who never settles, always pushing boundaries to exceed expectations."
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials