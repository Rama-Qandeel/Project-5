import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";

const InfoStore = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get(`http://localhost:5000/getproduct/${props.location.state.store_id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  const renderProducts = products.map((product) =>
   <Product data={product} />);

  return (
    <div>
      <div className="store-container">{renderProducts}</div>
    </div>
  );
};

export default InfoStore;
