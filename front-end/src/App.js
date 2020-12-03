import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import CSTprofile from './CSTprofile';
import  "./App.css"
// import  'bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const App = (props) => {

  return (
    <Router>
      <div className="app">
        <p>APP</p>
        <Route exact path="/profile">
        <CSTprofile/>
      </Route>
      </div>
    </Router>
  )
}


export default App
