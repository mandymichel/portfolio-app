import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  // Enable swipe-to-close
  useEffect(() => {
    let startX = null

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
      if (!startX) return
      const diffX = startX - e.touches[0].clientX
      if (diffX > 50) {
        closeSidebar()
        startX = null
      }
    }

    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <NavLink
            to="/bio"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeSidebar}
          >
            Bio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeSidebar}
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeSidebar}
          >
            Projects
          </NavLink>
        </nav>
      </div>

      {!isOpen && (
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      )}
    </>
  )
}

export default Sidebar
