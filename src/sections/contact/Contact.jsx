import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import contacts from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
    return () => {
      AOS.refresh();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS environment variables.');
      alert('Email service is not configured correctly.');
      return;
    }

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
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
        <form ref={form} onSubmit={sendEmail} className="contact__form" aria-label="Contact form">
          <input type="text" name="from_name" placeholder="Your Full Name" required aria-label="Your Full Name" />
          <input type="email" name="from_email" placeholder="Your Email" required aria-label="Your Email" />
          <textarea name="message" rows="7" placeholder="Your Message" required aria-label="Your Message"></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
        <div className="contact__links">
          {contacts.map(contact => (
            <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer" className="contact__link" aria-label={`Contact via ${contact.id === 1 ? 'Email' : 'WhatsApp'}`}>
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
