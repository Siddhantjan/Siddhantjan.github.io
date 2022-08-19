import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const FooterSocials = () => {
  return (
    <div className='footer__socials'>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <FiInstagram />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <IoLogoTwitter />
      </a>
    </div>
  );
}

export default FooterSocials