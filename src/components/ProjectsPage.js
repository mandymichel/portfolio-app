function ProjectsPage({ projects, openLightbox }) {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              onClick={() => openLightbox(project.image)}
              className="clickable"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectsPage
