import React, { useContext } from "react";
import productContext from "../context/productContext";
import dog from "../assets/dog.jpg";
import { MdDelete } from "react-icons/md";

const Cartitems = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;
  const Total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      className="container mt-4 cart-page"
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="productcontainer-cart">
        <ul className="product-list" style={{ listStyleType: "none", padding: 0 }}>
          {cart.map((item) => (
            <li
              key={item._id}
              style={{
                marginBottom: "20px",
                padding: "15px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="row cart-list" style={{ alignItems: "center" }}>
                <div className="col-md-2">
                  <img
                    src={
                      `http://localhost:5000/uploads/${item.image[0]}` || dog
                    }
                    style={{
                      height: "80px",
                      width: "80px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    alt={item.name}
                  />
                </div>
                <div className="col-md-2">
                  <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {item.title}
                  </h5>
                </div>
                <div className="col-md-2">
                  <h5 style={{ fontSize: "16px", color: "#28a745" }}>
                    Price: Rs.{item.price}
                  </h5>
                </div>
                <div className="col-md-2">
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_CART_ITEM",
                        payload: { _id: item._id, qty: e.target.value },
                      })
                    }
                    className="form-control"
                    style={{
                      borderRadius: "5px",
                      padding: "5px",
                      border: "1px solid #ccc",
                    }}
                  >
                    {[...Array(item.instock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                    style={{
                      backgroundColor: "#f8d7da",
                      color: "#721c24",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px 12px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="summary"
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <div
          className="title"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Total items: {cart.length}
        </div>
        <h4 style={{ fontSize: "20px", color: "#28a745" }}>
          Sub-total: Rs. {Total}
        </h4>
        <button
          className="btn btn-primary"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
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
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cartitems;