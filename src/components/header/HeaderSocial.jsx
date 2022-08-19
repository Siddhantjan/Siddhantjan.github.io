import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__social__icon">
      <a
        href="https://www.linkedin.com/in/siddhantjan/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Siddhantjan" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/SiddhantJain0101/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocial