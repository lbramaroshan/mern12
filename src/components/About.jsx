import React from "react";

const About = () => {
  return (
    <div className="container py-5 about-section">
      <div className="text-center mb-4">
        <h2 className="fw-bold">About Us</h2>
        <p className="text-muted">Discover our journey and mission</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="src/assets/main.png"
            alt="About"
            className="img-fluid rounded shadow w-100 h-10" 
          />
        </div>
        <div className="col-md-6">
          <h4 className="fw-semibold">Our Mission</h4>
          <p>
            At <strong>ShopSmart</strong>, our goal is to deliver high-quality products
            at affordable prices. We aim to provide a seamless online shopping experience,
            ensuring customer satisfaction every step of the way.
          </p>
          <p>
            Built using the MERN stack, our platform is optimized for speed, security, and scalability.
            We believe in empowering our users with intuitive features and exceptional service.
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <h4 className="mb-4">Why Choose Us?</h4>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h5>Fast Delivery</h5>
            <p>We deliver your orders swiftly with trusted logistics partners.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h5>Secure Payments</h5>
            <p>End-to-end encryption ensures your transactions are safe with us.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h5>24/7 Support</h5>
            <p>Our team is always available to help you with your queries.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
