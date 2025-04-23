export default function ProjectCard({ title, description, link, image }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "300px",
        padding: "1rem",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "6px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  )
}
