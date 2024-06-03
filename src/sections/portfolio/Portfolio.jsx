import React, { useEffect, useState } from 'react';
import './portfolio.css';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const uniqueCategories = ["all", ...new Set(data.flatMap(item => item.categories))];
  
  const filterProjectsHandler = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setProjects(data);
      return;
    }

    const filteredProjects = data.filter(project => project.categories.includes(category));
    setProjects(filteredProjects);
  }

  return (
    <section id="portfolio">
      <h2 data-aos="fade-up">Recent Projects</h2>
      <p data-aos="fade-up">
        Check out some of the projects I recently worked on. Use the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container" data-aos="fade-up">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} activeCategory={activeCategory} />
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio;