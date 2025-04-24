import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Header from "./components/Header"
import BioSection from "./components/BioSection"
import BlogPage from "./components/BlogPage"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import ProjectsPage from "./components/ProjectsPage"
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

  const openLightbox = (imgSrc) => setLightboxImg(imgSrc)
  const closeLightbox = () => setLightboxImg(null)

  const projects = [
    {
      title: "Sentiment Analysis App",
      description: "Analyzes user sentiment from input text.",
      link: "https://mandymichel.github.io/sentiment-analysis/",
      image: `${process.env.PUBLIC_URL}/screenshots/sentiment.png`,
    },
    {
      title: "Countdown App",
      description: "Counts down to a target date or event.",
      link: "https://mandymichel.github.io/countdown-app/",
      image: `${process.env.PUBLIC_URL}/screenshots/countdown.png`,
    },
  ]

  return (
    <Router>
      <div className="App" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "200px", padding: "20px", flexGrow: 1 }}>
          <Header />
          <Routes>
            <Route path="/portfolio-app" element={<Navigate to="/bio" />} />
            <Route path="/bio" element={<BioSection />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/projects"
              element={
                <ProjectsPage projects={projects} openLightbox={openLightbox} />
              }
            />
          </Routes>
          {lightboxImg && (
            <div className="lightbox" onClick={closeLightbox}>
              <img src={lightboxImg} alt="Full size project" />
            </div>
          )}
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App


