import React from 'react'
import "../../index.css";
export default function Navbar() {
  return (
   <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary w-full mb-0">
    <div className="container-fluid ">
    <h2>Start Bootstrap</h2>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link " >Contact</a>
          </li>
        </ul>
     
      </div>
    </div>
  </nav>
</div>

  )
}

