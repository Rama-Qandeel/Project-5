import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import CSTprofile from './CSTprofile';


const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route
        exact
        path="/register"
        render={(props) => <Register {...props} />}
      />
      <Route exact path="/home" render={(props) => <Home {...props} />} />
      <Route exact path="/profile" render={(props) => <CSTprofile {...props} />} /> 
    </Router>
  );
};

export default App;
