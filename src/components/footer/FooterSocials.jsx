import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const FooterSocials = () => {
  return (
    <div className="footer__socials">
      <a
        href="https://www.instagram.com/siddhant_jan/"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
      <a
        href="https://www.facebook.com/SiddhantJain0101/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com/Siddhant_jan"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoTwitter />
      </a>
    </div>
  );
}

export default FooterSocials