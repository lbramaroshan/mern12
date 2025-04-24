import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import productContext from "../context/productContext";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const context = useContext(productContext);
  const {
    state: { cart },
  } = context;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    } else {
      toast.warn("Please enter a search term!", {
        position: "top-center",
      });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm py-3`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/">
            {props.title}
          </Link>

          {/* ✅ Navbar toggler for mobile */}
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto gap-3 fw-semibold">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">User List</Link></li>
            </ul>

            <form onSubmit={handleSearchSubmit} className="d-flex align-items-center me-3 search-bar">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn search-btn" type="submit">Search</button>
            </form>

            <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
              <Link to="/cartitems" className="position-relative">
                <button className="btn cart-btn">
                  <FaShoppingCart size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                </button>
              </Link>

              <button onClick={props.toggleMode} className="btn mode-btn">
                <div className="icon-wrapper">
                  {props.mode === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Styles */}
      <style jsx>{`
        .navbar-brand {
          color: #007bff !important;
        }

        .nav-link {
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #28a745;
        }

        .search-bar input:focus {
          border-color: #28a745;
          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
        }

        .search-btn {
          background-color: #28a745;
          color: white;
          border: none;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          background-color: #218838;
          transform: scale(1.05);
        }

        .cart-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #007bff;
          color: #007bff;
          transition: transform 0.2s ease-in-out;
        }

        .cart-btn:hover {
          transform: scale(1.1);
          background-color: #f0f8ff;
        }

        .mode-btn {
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          transition: background 0.3s, transform 0.3s;
        }

        .mode-btn:hover {
          background-color: #e9ecef;
          transform: rotate(10deg);
        }

        .icon-wrapper {
          transition: transform 0.3s ease-in-out;
        }

        .mode-btn:hover .icon-wrapper {
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Navbar;
