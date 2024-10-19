// src/components/MainSection.js
import React from "react";
import "../App.css";

const MainSection = () => {
  return (
    <main>
      <section id="about" className="main-section py-5">
        <div className="container text-center">
          <h2>About Us</h2>
          <p className="lead">
            Professional, integrity, and our experiences support provide the
            best service for you.
          </p>
        </div>
      </section>

      <section id="services" className="py-5">
        <div className="container text-center">
          <h2>Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>Property Valuation</h4>
              <p>We provide expert property valuation services.</p>
            </div>
            <div className="col-md-4">
              <h4>Feasibility Study</h4>
              <p>Detailed feasibility studies for your business decisions.</p>
            </div>
            <div className="col-md-4">
              <h4>Asset Valuation</h4>
              <p>Valuation for various types of assets.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-5 bg-light">
        <div className="container text-center">
          <h2>Gallery</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assets/images/project-monitoring.png"
                className="img-fluid"
                alt="Gallery Image 1"
              />
            </div>
            <div className="col-md-6">
              <img
                src="assets/images/gallery_2.jpg"
                className="img-fluid"
                alt="Gallery Image 2"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
