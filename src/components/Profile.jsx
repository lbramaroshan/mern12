import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";
import dog from "../assets/dog.jpg";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const Profile = () => {
  const {
    state: { cart },
    dispatch,
    product,
    products,
    allProduct,
    deleteProduct,
    editProduct,
  } = useContext(productContext);

  const [menuVisible, setMenuVisible] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    allProduct();
  }, []);

  const toggleMenu = (id) => {
    setMenuVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const saveEdit = (updateData) => {
    editProduct(selectedProduct._id, updateData);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
  };

  return (
    <div className="profile-page container">
      <h2 className="profile-title">My Products</h2>
      <div className="row">
        {products.map((item) => (
          <div className="col-md-3" key={item._id}>
            <div className="product-card card shadow-sm">
              <img
                src={
                  item.image?.[0]
                    ? `http://localhost:5000/uploads/${item.image[0]}`
                    : dog
                }
                className="card-img-top"
                alt="product"
              />
              <div className="card-body">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5>{item.title}</h5>
                  <BsThreeDots onClick={() => toggleMenu(item._id)} className="dots-icon" />
                  {menuVisible[item._id] && (
                    <div className="menu-options">
                      <button onClick={() => openEditModal(item)}>Edit</button>
                      <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                  )}
                </div>
                <p>{item.description}</p>
                <h6>Price: Rs. {item.price}</h6>
                {cart.some((p) => p._id === item._id) ? (
                  <button
                    className="btn btn-danger w-100"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-success w-100"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: item })
                    }
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
            {modalVisible &&
              selectedProduct &&
              selectedProduct._id === item._id && (
                <EditProductModal
                  product={selectedProduct}
                  onClose={closeEditModal}
                  onSave={saveEdit}
                />
              )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .profile-title {
          font-size: 2rem;
          margin: 30px 0;
          text-align: center;
          font-weight: bold;
          color: #333;
        }
        .product-card {
          margin-bottom: 30px;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .card-header {
          position: relative;
        }
        .dots-icon {
          cursor: pointer;
          font-size: 1.2rem;
        }
        .menu-options {
          position: absolute;
          right: 10px;
          top: 25px;
          background-color: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          z-index: 10;
          border-radius: 8px;
          padding: 5px 10px;
        }
        .menu-options button {
          display: block;
          width: 100%;
          background: none;
          border: none;
          padding: 5px 10px;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .menu-options button:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default Profile;
