// src/components/Header.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Impor file CSS untuk header

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img
              src="assets/images/tbr_1.png"
              alt="Logo"
              width="40"
              height="40"
            />
            KJPP TBR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <i className="fas fa-info-circle"></i> About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <i className="fas fa-cogs"></i> Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  <i className="fas fa-images"></i> Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
