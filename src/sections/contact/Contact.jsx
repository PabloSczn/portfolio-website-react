import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import contacts from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mw3xzci', 'template_v5uzlia', form.current, 'UERgo7qFzewmQWazz')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h2 data-aos="fade-up">Get In Touch</h2>
      <p data-aos="fade-up">Shoot me a message via the form below or any of the links!</p>
      <div className="container contact__container" data-aos="fade-up">
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="from_name" placeholder="Your Full Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
        <div className="contact__links">
          {contacts.map(contact => (
            <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer" className="contact__link">
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
