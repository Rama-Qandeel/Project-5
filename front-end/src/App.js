import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom"; 
import './App.css';
import Register from './components/Register';
import Login from "./components/Login";

// Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <Router>
     <div>
     <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      </div>
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
