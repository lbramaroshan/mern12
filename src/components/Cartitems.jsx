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
    <div className="container mt-4 cart-page">
      <div className="productcontainer-cart">
        <ul className="product-list">
          {cart.map((item) => (
            <li key={item._id}>
              <div className="row cart-list">
                <div className="col-md-2">
                  <img
                    src={
                      `http://localhost:5000/uploads/${item.image[0]}` || dog
                    }
                    style={{ height: "80px", width: "80px" }}
                    alt={item.name}
                  />
                </div>
                <div className="col-md-2">
                  <h5>{item.title}</h5>
                </div>
                <div className="col-md-2">
                  <h5>Price: Rs.{item.price}</h5>
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
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sumary">
        <div className="title">Total items: {cart.length}</div>
        <h4>Sub-total: Rs. {Total}</h4>
        <button className="btn btn-primary">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cartitems;
