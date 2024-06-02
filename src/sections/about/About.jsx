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
            We're no strangers to love
            You know the rules and so do I (do I)
            A full commitment's what I'm thinking of
            You wouldn't get this from any other guy
            I just wanna tell you how I'm feeling
            Gotta make you understand
            Never gonna give you up
            Never gonna let you down
            Never gonna run around and desert you
            Never gonna make you cry
            Never gonna say goodbye
            Never gonna tell a lie and hurt you
            We've known each other for so long
            Your heart's been aching, but you're too shy to say it (say it)
            Inside, we both know what's been going on (going on)
            We know the game and we're gonna play it
            And if you ask me how I'm feeling
            Don't tell me you're too blind to see
          </p>
          <a href={CV} download className='btn primary' data-aos="fade-in">Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About;
