import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-center",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="contact-container">
        <h2 className="title">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FaCommentDots className="icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          max-width: 600px;
          margin: 3rem auto;
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.6s ease-in-out;
        }

        .title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #007bff;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .icon {
          position: absolute;
          left: 10px;
          color: #007bff;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.8rem 0.8rem 0.8rem 2.5rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #28a745;
          box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
        }

        .submit-btn {
          background: linear-gradient(to right, #28a745, #218838);
          color: white;
          padding: 0.8rem;
          font-size: 1rem;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .submit-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(to right, #218838, #1e7e34);
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
    </>
  );
};

export default ContactForm;