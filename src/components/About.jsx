import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";
import dog from "../assets/dog.jpg";
import { Link, useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const About = () => {
  const params = useParams();
  const searchQuery = params;
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
    product,
    products,
    allProduct,
    deleteProduct,
    editProduct,
  } = context;
  console.log("this is state products", products);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log("total products:", product);

  const toggleMenu = (id) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
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
    console.log("edit product", updateData);
    editProduct(selectedProduct._id, updateData);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
  };
  useEffect(() => {
    allProduct(searchQuery);
  }, [searchQuery]);

  return (
    <div className="container">
      <h1>Profile Page</h1>

      <div className="row">
        {products.map((item) => {
          return (
            <div className="col-md-3" key={item._id}>
              <div className="card">
                <img
                  src={
                    item.image?.[0]
                      ? `http://localhost:5000/uploads/${item.image[0]}`
                      : dog // fallback image import
                  }
                  className="card-img-top"
                  alt="product"
                />
                <div className="card-body">
                  <div className="title-content">
                    <h5 className="card-title">{item.title}</h5>
                    <BsThreeDots onClick={() => toggleMenu(item._id)} />
                    {menuVisible[item._id] && (
                      <div className="menu-options">
                        <button onClick={() => openEditModal(item)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(item._id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="card-text">{item.description}</p>
                  <h4>Price: Rs.{item.price}</h4>
                  {cart && cart.some((p) => p._id === item._id) ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    >
                      remove from cart
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        });
                      }}
                    >
                      add to cart
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
          );
        })}
      </div>
    </div>
  );
};

export default About;
