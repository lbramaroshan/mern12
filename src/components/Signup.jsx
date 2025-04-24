import React, { useState } from "react";
import Register from "../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credential;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (data) {
      localStorage.setItem("token", data.authToken);
      navigate("/login");
    }

    console.log("form submitted");
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              className="register-image"
              src={Register}
              alt="Sign up"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div className="col-md-6">
            <h4
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#007bff",
                textAlign: "center",
                textTransform: "uppercase",
                
              }}
            >
              Register to visit our website
            </h4>
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={credential.name}
                  onChange={handleChange}
                  id="name"
                  placeholder="Name"
                  style={{
                    borderRadius: "5px",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Email address
                </label>
                <div style={{ position: "relative" }}>
                  <FaEnvelope
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      color: "#aaa",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={credential.email}
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    placeholder="enter your email"
                    style={{
                      borderRadius: "5px",
                      padding: "10px 10px 10px 35px",
                      border: "1px solid #ccc",
                    }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={credential.password}
                    onChange={handleChange}
                    className="form-control"
                    id="password"
                    placeholder="enter your password"
                    style={{
                      borderRadius: "5px",
                      padding: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#aaa",
                      fontSize: "18px",
                      transition: "color 0.3s",
                      zIndex: 1,
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="cpassword"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cpassword"
                  value={credential.cpassword}
                  onChange={handleChange}
                  className="form-control"
                  id="cpassword"
                  placeholder="Confirm Password"
                  style={{
                    borderRadius: "5px",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007bff")
                }
              >
                Submit
              </button>

              <p style={{ marginTop: "10px", textAlign: "center" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#007bff" }}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;