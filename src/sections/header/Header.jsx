import React, { useEffect } from 'react';
import HeaderImage from '../../assets/header.jpg';
import data from './data';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos="fade-up">Pablo Sanchez Narro</h3>
        <p data-aos="fade-up">
          Software Engineer @ Taxcoder | BEng (Hons) Software Engineer
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#portfolio" className="btn primary" aria-label="View my work">My Work</a>
          <a href="#contact" className="btn light" aria-label="Contact me">Let's Talk!</a>
        </div>
        <div className="header__socials" data-aos="fade-up">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${item.label}`}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;