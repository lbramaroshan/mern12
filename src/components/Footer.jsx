import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">ShopEasy</h5>
            <p>
              Your one-stop shop for all your needs. Quality products at affordable prices with excellent customer service.
            </p>
            <div className="mt-4">
              <Link to="https://www.facebook.com/" className="text-white me-3"><FaFacebook size={20} /></Link>
              <Link to="https://x.com/LbtRamaroshan" className="text-white me-3"><FaTwitter size={20} /></Link>
              <Link to="https://www.instagram.com/lbtramaroshan/" className="text-white me-3"><FaInstagram size={20} /></Link>
              <Link to="https://www.linkedin.com/in/lalit-tamatta-2490052a9/" className="text-white me-3"><FaLinkedin size={20} /></Link>
              <Link to="https://github.com/lbramaroshan" className="text-white"><FaGithub size={20} /></Link>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="text-white text-decoration-none">Products</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              <li className="mb-2"><Link to="/faq" className="text-white text-decoration-none">FAQ</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/shipping" className="text-white text-decoration-none">Shipping Policy</Link></li>
              <li className="mb-2"><Link to="/returns" className="text-white text-decoration-none">Return Policy</Link></li>
              <li className="mb-2"><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i> 123 Main Street, City, Country
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i> +9779868994827
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i>shopsmartnew@gmaol.com
              </li>
              <li className="mb-2">
                <i className="fas fa-clock me-2"></i> Mon-Fri: 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="payment-methods">
              <span className="me-2">We accept:</span>
              <i className="fab fa-cc-visa me-2" style={{ fontSize: '1.5rem' }}></i>
              <i className="fab fa-cc-mastercard me-2" style={{ fontSize: '1.5rem' }}></i>
              <i className="fab fa-cc-paypal me-2" style={{ fontSize: '1.5rem' }}></i>
              <i className="fab fa-cc-amex" style={{ fontSize: '1.5rem' }}></i>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        }
        
        footer a:hover {
          color: #0dcaf0 !important;
          text-decoration: underline !important;
        }
        
        .payment-methods i {
          transition: transform 0.3s ease;
        }
        
        .payment-methods i:hover {
          transform: scale(1.2);
        }
        
        hr {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .text-md-start, .text-md-end {
            text-align: center !important;
          }
          
          .col-md-3 {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;