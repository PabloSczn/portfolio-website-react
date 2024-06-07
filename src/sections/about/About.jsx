import React, { useEffect } from 'react';
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/PabloSanchezNarroCV.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left" data-aos="fade-right">
          <div className="about__portrait">
            <img src={AboutImage} alt="About me" />
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
            Innovative and experienced BEng Software Engineering graduate fluent in Spanish and English. 
            Demonstrates a robust "get things done" attitude, an exceptional sense of ownership, and a deep understanding of engineering fundamentals. 
            Proven track record in managing complex software projects and working in dynamic teams to exceed standards in software development.
          </p>
          <a href={CV} download className='btn primary' data-aos="fade-in">Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About;
