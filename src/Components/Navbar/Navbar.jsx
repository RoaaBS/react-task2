import React from 'react';
import { Link } from 'react-router-dom'; 
import "../../index.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-full mb-0">
        <div className="container-fluid">
          <h2>Start Bootstrap</h2>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'/'}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/About'}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
