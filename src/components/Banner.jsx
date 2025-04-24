import React from "react";
import banner1 from "../assets/mm.avif";
import banner2 from "../assets/bg1.avif";

const Banner = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          marginBottom: "40px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img
              src={banner1}
              className="d-block w-100"
              alt="First Slide"
              style={{ objectFit: "cover", height: "500px" }}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h5 style={{ fontSize: "32px", fontWeight: "bold" }}>
                Welcome to Our Store
              </h5>
              <p style={{ fontSize: "18px", marginTop: "10px" }}>
                Discover the best products at unbeatable prices.
              </p>
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#218838")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#28a745")
                }
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100"
              alt="Second Slide"
              style={{ objectFit: "cover", height: "500px" }}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h5 style={{ fontSize: "32px", fontWeight: "bold" }}>
                Join Our Community
              </h5>
              <p style={{ fontSize: "18px", marginTop: "10px" }}>
                Sign up today and enjoy exclusive benefits and offers.
              </p>
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007bff")
                }
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;