import React from 'react'
import './testimonials.css'
import Rajeev from "../../assets/rajeev.jpg";
import Mohit from "../../assets/mohit.jpg";
import Sarthak from "../../assets/sarthak.jpg";
import Girindra from "../../assets/girindra.jpg";

// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Rajeev,
    name: "Rajeev Mohan",
    review:
      "Be it Leadership, Speaking Skills, Motivational Skills or Programming, Siddhant always present a great example to the people who follow him. Being a member of community, he is also famous in the Tech Community of the college as well as outside the college. His programming skills are astounding from the freshman Year of our college. I have seen times when juniors as well as people from other colleges would come and ask questions from Siddhant.",
  },
  {
    avatar: Mohit,
    name: "Mohit Sharma",
    review:
      "We worked on Stazer projects in mobile development together. He is very proficient in Java. He understands programming and data structures well and possesses skills such as problem solving, debugging, communication, and so on. He is enthusiastic about learning new technologies and has the ability to focus and work under pressure on ongoing projects.",
  },
  {
    avatar: Sarthak,
    name: "Sarthak Modi",
    review:
      "Siddhant has worked with me for three years, and I am proud to say that he is thoughtful, innovative, and hardworking. He can see opportunities for improvement in every aspect of a process, making him a'stand out' person. His strength is his imagination, which does not confine him to a work perimeter.",
  },
  {
    avatar: Girindra,
    name: "Girindra Kaushik",
    review:
      "Intellectual mind, true hustler, and above all, a person with strong values and work ethic. I admire his intelligence and desire to make a positive difference in the lives of those around him. We worked together for Tech Knights, and I can attest to his clinical execution style. He's methodical and vivacious. He had a good balance of academics and extracurricular activities. He is, indeed, a wonderful individual!",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendation from Users</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
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