import React from "react"
import { Link } from "react-router-dom"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
