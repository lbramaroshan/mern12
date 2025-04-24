import React, { useState } from "react";
import Register from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credential;
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data) {
      localStorage.setItem("token", data.authToken);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-5 login-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <img
              className="img-fluid rounded login-image"
              src={Register}
              alt="Login Visual"
            />
          </div>

          <div className="col-md-6">
            <div className="card p-4 shadow rounded-4">
              <h3 className="mb-4 text-center fw-bold">Welcome Back 👋</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={credential.email}
                    onChange={handleChange}
                    className="form-control input-field"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="form-group mb-4 position-relative">
                  <label>Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={credential.password}
                      onChange={handleChange}
                      className="form-control input-field"
                      placeholder="Enter password"
                      required
                    />
                    <span
                      className="password-toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
                <p className="mt-3 text-center">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-decoration-none">
                    <strong>Register</strong>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .login-image {
          max-height: 400px;
          object-fit: cover;
        }

        .card {
          border-radius: 20px;
        }

        .input-field {
          border-radius: 12px;
          transition: 0.3s;
        }

        .input-field:focus {
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.25);
        }

        .btn-primary {
          border-radius: 12px;
          font-weight: 600;
          transition: transform 0.2s ease;
        }

        .btn-primary:hover {
          transform: scale(1.05);
        }

        .password-input-wrapper {
          position: relative;
        }

        .password-toggle-icon {
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          cursor: pointer;
          color: #555;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .login-image {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Login;
