import React from 'react';

const About = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-success fw-bold mb-4">About Salah Time Calculator</h1>
      <p className="lead text-muted">
        Salah is not just a ritual — it's a spiritual connection. Our Salah Time Calculator is designed to help you stay connected by providing accurate prayer times for your city.
      </p>

      <div className="mt-4">
        <h4 className="text-primary">Why Use Our App?</h4>
        <p className="mb-3">
          Whether you're at home, at work, or traveling — knowing your daily prayer times should always be simple. That’s why we built this platform: to make Salah time accessible, reliable, and beautifully presented.
        </p>
      </div>

      <div className="row mt-4 justify-content-center">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">✨ Accurate Times</h5>
              <p className="card-text">Prayer times are updated and verified regularly by our admin panel.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">🌍 City-Based Support</h5>
              <p className="card-text">View Salah times specific to your city, with more cities being added.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-success">🕌 Simple & Clean UI</h5>
              <p className="card-text">Designed with clarity in mind so you can focus on what truly matters — your prayers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-muted small">
          Built with ❤️ by a passionate team of developers as part of a student project. May this small effort benefit many, Insha’Allah.
        </p>
      </div>
    </div>
  );
};

export default About;
