import React, { useReducer } from "react";
import ProductContext from "./productContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  // const [articles, setArticles] = React.useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a"
  //     );
  //     if (!response) {
  //       throw new Error(response.status);
  //     }
  //     const data = await response.json();
  //     setArticles(data.articles);
  //     console.log(data.articles);
  //   } catch (error) {
  //     console.error("fetching error", error);
  //   }
  // };
  const [products, setProducts] = React.useState([]);
  const product = [
    {
      _id: 1,
      title: "apple",
      description: "Apple is good for health",
      price: 50,
      instock: 10,
    },
    {
      _id: 2,
      title: "banana",
      description: "Banana is good for health",
      price: 60,
      instock: 5,
    },
    {
      _id: 3,
      title: "Mango",
      description: "Mango juice  is sweet",
      price: 40,
      instock: 4,
    },
    {
      _id: 4,
      title: "Grapes",
      description: "Grapes juice  is sweet",
      price: 40,
      instock: 4,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  const allProduct = async (searchQuery = "") => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/getproduct?searchQuery=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("internal server error", error);
      res.status(500).send("internal server error");
    }
  };

  // edit product
  const editProduct = async (selectedProduct_id, updateData) => {
    const { title, description, price, instock } = updateData;
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/updateproduct/${selectedProduct_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title, description, price, instock }),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      allProduct();
      console.log(data);
    } catch (error) {
      console.error("internal server error", error);
      throw new Error("failed to update item");
    }
  };

  //  delete product
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log("product deleted");
    } catch (error) {
      console.error("internal server error", error);
      throw new Error("failed to update item");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        products,
        allProduct,
        editProduct,
        deleteProduct,
        state,
        dispatch,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
