import React from "react"
import "./navbar.css"

function Navbar(){
  return (
    <nav className="navbar">
      <div className="nav-item dropdown">
        <button className="btn-lg nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          NAVIGATION
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Home</a>
          <a className="dropdown-item" href="/work">Projects</a>
          <a className="dropdown-item" href="/aboutme">About Me</a>
          <a className="dropdown-item" href="/contact">Contact Me</a>
        </div>
      </div>
      <div className = "buttons">
          <a as="button" rel="noreferrer" target="_blank" href="https://github.com/TravCook" className="fa fa-github navButton btn-lg"></a>
          <a as="button" rel="noreferrer" target="_blank" href="https://twitter.com/spillthe_TCook" className="fa fa-twitter navButton btn-lg"></a>
          <a as="button" rel="noreferrer" target="_blank" href="https://www.instagram.com/smokeybear970/" className="fa fa-instagram navButton btn-lg"></a>
          <a as="button" rel="noreferrer" target="_blank" href="https://linkedin.com/in/travis-cook-01292a1b9" className="fa fa-linkedin navButton btn-lg"></a>
      </div>
    </nav>
  )
}
export default Navbar