import React from "react";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = React.useState({
    title: product.title,
    description: product.description,
    price: product.price,
    instock: product.instock,
  });
  const handleSave = () => {
    onSave(formData);
    onClose();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="modal  open"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-6">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  name="title"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="title" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  name="description"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="title" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="title"
                  value={formData.price}
                  onChange={handleChange}
                  name="price"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="title" className="form-label">
                  Instock
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="instock"
                  value={formData.instock}
                  onChange={handleChange}
                  name="instock"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
      /* Modal backdrop style */
.modal.open {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}

/* Modal dialog */
.modal-dialog {
  margin-top: 10vh;
  max-width: 600px;
  animation: modalSlideIn 0.3s ease-out;
}

/* Modal content */
.modal-content {
  border: none;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

/* Header */
.modal-header {
  background-color: #f8f9fa;
  padding: 20px;
  border-bottom: 1px solid #e3e3e3;
}

.modal-title {
  font-weight: 600;
  font-size: 20px;
  color: #333;
}

/* Close button */
.btn-close {
  background: none;
  border: none;
  opacity: 0.6;
}

.btn-close:hover {
  opacity: 1;
}

/* Modal body form */
.modal-body {
  padding: 20px;
}

.modal-body form .form-label {
  font-weight: 500;
  margin-bottom: 6px;
}

.modal-body form .form-control {
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ced4da;
  transition: border-color 0.2s ease;
}

.modal-body form .form-control:focus {
  border-color: #4c6ef5;
  box-shadow: 0 0 0 0.15rem rgba(76, 110, 245, 0.2);
}

/* Footer */
.modal-footer {
  padding: 15px 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #e3e3e3;
  display: flex;
  justify-content: space-between;
}

/* Buttons */
.modal-footer .btn-primary {
  background-color: #4c6ef5;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  padding: 8px 16px;
  transition: background-color 0.3s ease;
}

.modal-footer .btn-primary:hover {
  background-color: #3b5bdb;
}

.modal-footer .btn-secondary {
  border-radius: 8px;
  padding: 8px 16px;
}

/* Animation */
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  /* Smooth slide-in animation */
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animation to modal dialog */
.modal-dialog {
  animation: slideInFromTop 0.4s ease-out;
}
/* Base style */
.btn-modern {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Primary button */
.btn-modern-primary {
  background-color: #4f46e5; /* Indigo */
  color: white;
}

.btn-modern-primary:hover {
  background-color: #4338ca;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  transform: translateY(-2px);
}

/* Secondary button */
.btn-modern-secondary {
  background-color: #e5e7eb; /* Light gray */
  color: #374151; /* Gray-800 */
}

.btn-modern-secondary:hover {
  background-color: #d1d5db;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

`}

      </style>
    </div>
  );
};

export default EditProductModal;
