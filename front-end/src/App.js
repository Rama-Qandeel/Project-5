import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import CSTprofile from './CSTprofile';
import "./App.css"
import StoreProfile from './StoreProfile';

// import  'bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const App = (props) => {
  const [storeId, setStoreId] = useState({
    name: 'Mohammad Jouza', // name={'Mohammad Jouza'}
    age: 26, // age={26}
    favFood: 'Fried Chicken', // favFood={ 'Fried Chicken',}
  })
  return (
    <Router>
      <div className="app">
        <p>APP</p>
        {/* <Route exact path="/profile">
          <CSTprofile />
        </Route> */}
        <Route
          exact
          path="/profile/:id"
          //          name={'Mohammad Jouza'} age={26} favFood={ 'Fried Chicken',}
          render={(props) => <CSTprofile  {...props} />}
        />
        {/* <Route path="/store/:id">
          <StoreProfile />
        </Route> */}
        <Route
          exact
          path="/store/:id"
          //          name={'Mohammad Jouza'} age={26} favFood={ 'Fried Chicken',}
          render={(props) => <StoreProfile name={storeId} sId={9}{...props} />}
        />
      </div>
    </Router>
  )
}


export default App
