import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import InfoStore from "./InfoStore";
import Product from "./components/Product";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Route exat path="/home" render={(props) => <Home {...props} />} />
      <Route
        exact
        path="/infostore"
        render={(props) => <InfoStore {...props} />}
      />
      <Route exact path="/product" render={(props) => <Product {...props} />} />
    </Router>
  );
};

export default App;
