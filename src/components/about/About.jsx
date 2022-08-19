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
              <small>2+ years working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>clients</h5>
              <small>100+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Hello Everyone! I am a fourth-year graduate student with a Btech in
            Information Technology from Rajasthan Technical University in Kota.
            I am a competitive programmer and full-stack developer. I enjoy
            learning about new technologies and honing my logic-building
            abilities in my spare time. I believe in problem-solving and am
            endlessly energetic to try and connect abstract approaches. I focus
            on creating visually compelling, meaningful experiences through
            design.
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
