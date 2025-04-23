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

    // instance creating for data
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
    if (e.target.type == "file") {
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
    <div className="container">
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={product.name}
            onChange={handleChange}
            id="input"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            id="input"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="input" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            id="input"
            placeholder="Name"
          />
          <div className="mb-3">
            <label htmlFor="input" className="form-label">
              Instock
            </label>
            <input
              type="number"
              className="form-control"
              name="instock"
              value={product.instock}
              onChange={handleChange}
              id="input"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleChange}
              id="input"
              placeholder="Name"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
