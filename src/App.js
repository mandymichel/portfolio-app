import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import BioSection from "./components/BioSection"
import BlogPage from "./components/BlogPage"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import ProjectsPage from "./components/ProjectsPage"
import AnimatedPage from "./components/AnimatedPage"
import "./App.css"

const AppContent = () => {
  const routerLocation = useLocation()
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
      image: "/portfolio-app/screenshots/sentiment.png",
    },
    {
      title: "Countdown App",
      description: "Counts down to a target date or event.",
      link: "https://mandymichel.github.io/countdown-app/",
      image: "/portfolio-app/screenshots/countdown.png",
    },
  ]

  return (
    <div className="App" style={{ display: "flex" }}>
      <Sidebar />
      <div className="main-content">
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={routerLocation} key={routerLocation.pathname}>
            <Route path="/portfolio-app" element={<Navigate to="/bio" />} />
            <Route
              path="/bio"
              element={
                <AnimatedPage>
                  <BioSection />
                </AnimatedPage>
              }
            />
            <Route
              path="/blog"
              element={
                <AnimatedPage>
                  <BlogPage />
                </AnimatedPage>
              }
            />
            <Route
              path="/projects"
              element={
                <AnimatedPage>
                  <ProjectsPage
                    projects={projects}
                    openLightbox={openLightbox}
                  />
                </AnimatedPage>
              }
            />
          </Routes>
        </AnimatePresence>
        {lightboxImg && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={lightboxImg} alt="Full size project" />
          </div>
        )}
        <Footer />
      </div>
    </div>
  )
}

// 👇 Wrap the whole thing in <Router> here:
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

