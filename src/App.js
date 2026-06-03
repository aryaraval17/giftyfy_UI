import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Birthday from './Birthday';
import Anniversary from './Anniversary';
import Cakes from './Cakes';
import Gifts from './Gifts';
import Contect from './Contect';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm position-fixed w-100" style={{ zIndex: 1000 }}>
            <div className="container-fluid">
              <Link to="/" className="navbar-brand fw-bold text-primary">
                Giftify
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-2">
                  <li className="nav-item">
                    <Link to="/" className="btn btn-outline-primary">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Birthday" className="btn btn-outline-primary">Birthday</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Anniversary" className="btn btn-outline-primary">Anniversary</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Cakes" className="btn btn-outline-primary">Cakes</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Gifts" className="btn btn-outline-primary">Gifts</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Contect" className="btn btn-outline-primary">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Login" className="btn btn-danger">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Birthday" element={<Birthday />} />
            <Route path="/Anniversary" element={<Anniversary />} />
            <Route path="/Cakes" element={<Cakes />} />
            <Route path="/Gifts" element={<Gifts />} />
            <Route path="/Contect" element={<Contect />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
