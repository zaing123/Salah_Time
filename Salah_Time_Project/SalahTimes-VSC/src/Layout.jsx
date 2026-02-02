import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa'; // ⬅️ Import icon

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Salah Time</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/salah-times">Salah Times</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/hijri-date">HijriDate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/LoginPage">
                  <FaSignInAlt className="me-1" /> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow-1 container my-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <small>&copy; {new Date().getFullYear()} Salah Time Calculator</small>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
