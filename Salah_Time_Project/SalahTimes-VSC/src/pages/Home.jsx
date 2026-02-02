// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import mosqueImg from '../img/mosque.jpg';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4 fw-bold text-success mb-4">Welcome to the Salah Time Calculator</h1>
      <p className="lead mb-5"> Stay connected with your faith. Access precise, city-wise Salah times updated daily by our trusted admin panel—so you never miss a prayer.</p>

      <Link to="/salah-times" className="btn btn-success btn-lg shadow">
        View Salah Times
      </Link>

      <div className="mt-5">
        <img
           src={mosqueImg}   alt="Mosque"
          className="img-fluid rounded shadow-lg"
          style={{ maxHeight: "400px", maxWidth: "100%", width: "100%",objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Home;
