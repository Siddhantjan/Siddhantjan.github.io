import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
            tenetur accusantium blanditiis officiis illum error veritatis
            maiores aspernatur. Fugiat, placeat. Veniam, cumque ea. Deleniti
            harum aut voluptas voluptatum consequuntur?
          </p>
          <a href="#contact" className="btn btn-primary btn-contact">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About
