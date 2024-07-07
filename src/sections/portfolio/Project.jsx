import Card from '../../components/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt={`${project.title} project`} />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer" aria-label={`View demo of ${project.title}`}>Demo</a>
        <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer" aria-label={`View GitHub repository of ${project.title}`}>GitHub</a>
        <div className="portfolio__project-icons">{project.icon}</div> {/* Displaying the icons */}
      </div>
    </Card>
  );
};

export default Project;