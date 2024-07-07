import React, { useEffect } from 'react';
import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/PabloSanchezNarroCV.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left" data-aos="fade-right">
          <div className="about__portrait">
            <img src={AboutImage} alt="Portrait of Pablo Sanchez Narro" />
          </div>
        </div>
        <div className="about__right" data-aos="fade-in">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map(item => (
              <Card key={item.id} className="about__card" data-aos="fade-up" data-aos-delay={item.id * 100}>
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p data-aos="fade-in">
            Welcome to my space! I'm a BEng Software Engineering with experience and a passion for turning complex challenges into great solutions.
            I thrive on a "get things done" attitude, taking ownership of projects and with a deep understanding of engineering fundamentals.
            I have a track record of working on projects that exceed expectations, I'm here to make a significant impact!
          </p>
          <a href={CV} download className='btn primary' aria-label="Download CV">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;