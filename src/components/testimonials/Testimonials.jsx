import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/avatar1.jpg'

// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: IMG1,
    name: "Siddhant Jain",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui nulla voluptate adipisci facere? Velit, blanditiis ipsum. Non pariatur quos, sint quae atque veniam repellendus necessitatibus nobis praesentium, molestias asperiores",
  },
  {
    avatar: IMG1,
    name: "Siddhant",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui nulla voluptate adipisci facere? Velit, blanditiis ipsum. Non pariatur quos, sint quae atque veniam repellendus necessitatibus nobis praesentium, molestias asperiores",
  },
   {
    avatar: IMG1,
    name: "GK",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui nulla voluptate adipisci facere? Velit, blanditiis ipsum. Non pariatur quos, sint quae atque veniam repellendus necessitatibus nobis praesentium, molestias asperiores",
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
      >
        {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small client__review>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials