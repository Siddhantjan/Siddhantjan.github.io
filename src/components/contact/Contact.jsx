import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =  useRef();
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm(
      "service_e1hsqox",
      "template_5myqcjq",
      form.current,
      "_g41tWb9yu4fmllS-"
    )
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>siddhantjain935@gmail.com</h5>
            <a href="mailto:siddhantjain935@gmail.com">send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9057111383</h5>
            <a href="https://api.whatsapp.com/send/?phone=919057111383&text&type=phone_number&app_absent=0">
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact
