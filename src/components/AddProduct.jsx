import React from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = React.useState({
    title: "",
    description: "",
    price: "",
    image: "",
    instock: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("add-product");

    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("instock", product.instock);
    if (product.image) {
      formData.append("myfile", product.image);
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/addproduct",
        formData,
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      setProduct({
        title: "",
        description: "",
        price: "",
        image: "",
        instock: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
      console.log("uploaded", e.target.files[0]);
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#007bff",
          marginBottom: "20px",
        }}
      >
        Add Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={product.title}
            onChange={handleChange}
            id="title"
            placeholder="Enter product title"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="form-label"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Description
          </label>
          <textarea
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            id="description"
            placeholder="Enter product description"
            rows="3"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="price"
            className="form-label"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            id="price"
            placeholder="Enter product price"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="instock"
            className="form-label"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            In Stock
          </label>
          <input
            type="number"
            className="form-control"
            name="instock"
            value={product.instock}
            onChange={handleChange}
            id="instock"
            placeholder="Enter stock quantity"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="image"
            className="form-label"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            Image
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleChange}
            id="image"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;