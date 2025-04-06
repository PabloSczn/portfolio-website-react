import CategoryButton from './CategoryButton'

const ProjectsCategories = ({ categories, onFilterProjects, activeCategory }) => {

  const changeCategoryHandler = (category) => {
    onFilterProjects(category);
  }

  return (
    <div className='portfolio__categories'>
      {categories.map(category => (
        <CategoryButton key={category} category={category} onChangeCategory={changeCategoryHandler} className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`} />
      ))}
    </div>
  )
}

export default ProjectsCategories;