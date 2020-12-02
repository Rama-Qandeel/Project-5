import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import { Link } from "react-router-dom";
import axios from "axios";

const InfoStore = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = () => {
    let data = { store_id: props.location.state.store_id };
    axios
      .post("http://localhost:5000/getproduct", data)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  const renderProducts = products.map((product) => <Product data={product} />);

  return (
    <div>
      <div className="store-container">{renderProducts}</div>
    </div>
  );
};

export default InfoStore;
