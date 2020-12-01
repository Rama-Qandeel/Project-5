import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom"; 
import './App.css';
import Register from './components/Register';
import Login from "./components/Login";
import Home from "./components/Home"
import Header from "./components/Header"
import Store from "./components/Store"
import InfoStore from './InfoStore';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <Router>
     <Header/>
     <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/home" render={props => <Home {...props} />} />
      <Route exact path="/infostore" render={props => <InfoStore {...props} />} />

     </Router>
    );
  }
}

/* 
// functional component
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};
export default App;
*/