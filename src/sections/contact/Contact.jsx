import React, { useEffect } from 'react';
import './contact.css';
import contacts from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section id="contact">
      <h2 data-aos="fade-up">Get In Touch</h2>
      <p data-aos="fade-up">Shoot me a message via the form below or any of the links!</p>
      <div className="container contact__container" data-aos="fade-up">
        <form
          action="https://formspree.io/f/mqabgapy"
          method="POST"
          className="contact__form"
          aria-label="Contact form"
        >
          <input type="text" name="name" placeholder="Your Full Name" required aria-label="Your Full Name" />
          <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
          <textarea name="message" rows="7" placeholder="Your Message" required aria-label="Your Message"></textarea>
          <input type="hidden" name="_subject" value="New portfolio contact form submission" />
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
