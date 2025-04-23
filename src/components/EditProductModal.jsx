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
    </div>
  );
};

export default EditProductModal;
