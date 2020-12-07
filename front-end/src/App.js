import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import InfoStore from "./InfoStore";
import Product from "./components/Product";
import CSTprofile from './CSTprofile';
import StoreProfile from './StoreProfile';
import  'bootstrap';

const App = (props) => {
  const [storeId, setStoreId] = useState({ })
  return (
    <Router>
      <div className="app">
        <p>APP</p>
        <Route
          exact
          path="/profile/:id"
          render={(props) => <CSTprofile  {...props} />}
        />
       
        <Route
          exact
          path="/store/:id"
          render={(props) => <StoreProfile name={storeId} sId={9}{...props} />}
        />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Route exat path="/home" render={(props) => <Home {...props} />} />
        <Route
        exact
        path="/infostore"
        render={(props) => <InfoStore {...props} />}
      />
      <Route exact path="/product" render={(props) => <Product {...props} />} />
      <Route exact path="/product" render={(props) => <Product {...props} />} />
      </div>
    </Router>
  );
};

export default App;
