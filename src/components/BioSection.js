import "./BioSection.css"

export default function BioSection() {
  return (
    <section className="bio">
      <div className="bio-container">
        <a
          href="https://www.linkedin.com/in/mandy-michel-76b7581a/"
          target="_blank"
          rel="noopener noreferrer"
          className="avatar-wrapper"
        >
          <div className="avatar-ring">
            <img
              src="/images/mandy.jpg"
              alt="Mandy Michel"
              className="avatar"
            />
          </div>
          <span className="tooltip">View LinkedIn</span>
        </a>

        <div className="bio-text">
          <p>
            👋 Hi, I'm <strong>Mandy Michel</strong> — a full stack developer
            who loves building intuitive, user-friendly apps. I enjoy turning
            ideas into reality through clean code, modern design, and meaningful
            features. Whether it's using AI to analyze sentiment or creating
            smooth countdown experiences, I’m always up for solving real-world
            problems.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a href="./resume.pdf" download className="resume-button">
          Download My Resume
        </a>
      </div>
    </section>
  )
}
