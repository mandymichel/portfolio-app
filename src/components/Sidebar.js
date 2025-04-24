// src/components/Sidebar.js
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <NavLink
            to="/bio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Bio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
