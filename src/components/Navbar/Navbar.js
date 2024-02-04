import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'; 

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(107, 75, 182, 0.2)' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Weather Logo" style={{ marginRight: '8px', height: '30px', width: '30px' }} />
            Weather App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/weatherinsight'>Weather Insights</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to='/search'>Search</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to='/forecast'>Forecast</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/stories'>Weather Chronicles</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
