import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <>
      {/* Upper Fixed Navbar */}
      <nav className="navbar navbar-expand-lg nav_t">
        <div className="container-md">
          <h5>gnvindia7@gmail.com</h5>
          <h5>GNV India Entertainment</h5>
          <h5>📞 9165671529</h5>
        </div>
      </nav>

      {/* Niche wala navbar jo scroll ke sath move karega */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav_b">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/beautiful'>Features</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
