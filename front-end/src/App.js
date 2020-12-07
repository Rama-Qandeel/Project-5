import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import CSTprofile from './CSTprofile';
import "./App.css"
import StoreProfile from './StoreProfile';
import  'bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

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
      </div>
    </Router>
  );
};

export default App;
