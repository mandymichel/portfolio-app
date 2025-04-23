import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import BioSection from "./components/BioSection"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [lightboxImg, setLightboxImg] = useState(null)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const projects = [
    {
      title: "Sentiment Analysis App",
      description: "Analyzes user sentiment from input text.",
      link: "https://mandymichel.github.io/sentiment-analysis/",
      image: "/screenshots/sentiment.png",
    },
    {
      title: "Countdown App",
      description: "Counts down to a target date or event.",
      link: "https://mandymichel.github.io/countdown-app/",
      image: "/screenshots/countdown.png",
    },
  ]

  const openLightbox = (imgSrc) => {
    setLightboxImg(imgSrc)
  }

  const closeLightbox = () => {
    setLightboxImg(null)
  }

  return (
    <div className="App">
      <Header />
      <BioSection />
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

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImg} alt="Full size project" />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default App
