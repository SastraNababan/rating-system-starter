import React from 'react'
import logo from "../logo.svg";

export default function Navigation() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark static-top"
        id="mainNav"
      >
        <div className="container">

          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src={logo} width={50} height={50} alt="logo"/>  
            Rating System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Start
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  About
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
