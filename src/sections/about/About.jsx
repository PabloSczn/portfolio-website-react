import React, { useEffect } from 'react';
import AboutImage from '../../assets/about.jpg';
import AzureBadgeImage from '../../assets/azure-badge.png';
import AwsBadgeImage from '../../assets/aws_solutions_architect-badge.png';
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
          <div className="about__certifications" data-aos="fade-in">
            <h5 className="about__certifications-title">Certifications</h5>
            <div className="about__certifications-grid">
              <a
                className="about__badge-link"
                href="https://learn.microsoft.com/en-us/users/pablosanchez-5034/credentials/40811831e406a186?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Microsoft certification page in a new tab"
              >
                <div className="about__badge">
                  <img src={AzureBadgeImage} alt="Microsoft Azure AI Engineer Associate badge" />
                </div>
              </a>
              <a
                className="about__badge-link"
                href="https://www.credly.com/badges/a6e48df6-dfd2-406d-b74c-44f99951fb2c/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open AWS certification page in a new tab"
              >
                <div className="about__badge">
                  <img src={AwsBadgeImage} alt="AWS Certified Solutions Architect badge" />
                </div>
              </a>
            </div>
          </div>
          <a href={CV} download className='btn primary' aria-label="Download CV">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
