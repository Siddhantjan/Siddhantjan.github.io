import React from 'react'
import './footer.css'
import FooterSocial from "./FooterSocials";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer___logo">
        Siddhant
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <FooterSocial/>

      <div className="footer__copyright">
        <small>&copy; Siddhant Jain. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer