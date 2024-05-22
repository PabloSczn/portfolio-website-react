import React, { useEffect, useState } from 'react';
import './portfolio.css';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  
  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }

  return (
    <section id="portfolio">
      <h2 data-aos="fade-up">Recent Projects</h2>
      <p data-aos="fade-up">
        Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container" data-aos="fade-up">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio;
