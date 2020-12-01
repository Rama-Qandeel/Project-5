import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const App = (props) => {
 
  const [userId, setUserId] = useState("")
  const [Address, setAddress] = useState("")
  const [Farstname, setFarstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [doB, doBset] = useState("")
  const [email, setEmail] = useState("")
  const [userPic, setUserPic] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [Info, setInfo] = useState()
  const getUser = async (infoArgumnt) => {
    console.log(infoArgumnt)
    axios
      .get(`http://localhost:5000/users/${infoArgumnt}`)
      .then(async (response) => {
        console.log("response", response)
        if (response.data.length === 0) {
          alert("wrong user id")
        }
        setAddress(response.data[0].address)
        setInfo(response.data[0])
        setFarstname(response.data[0].first_name)
        setLastname(response.data[0].last_name)
        doBset(response.data[0].birthday)
        setEmail(response.data[0].email)
        setUserPic(response.data[0].image_profile)
        setPhoneNumber(response.data[0].phone_number)
      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
  };
  return (
    <Router>
      <div className="app">
        <p>APP</p>
        <button onClick={() => getUser(userId)} > get user </button>
        <input onChange={(e) => { setUserId(e.target.value) }} placeholder="user id" />
        <div>
          <p>{userPic}</p> <img src={userPic} alt="profile pic" className="pPic"></img>
          <p>Address:{Address}</p>
          <p>Farstname:{Farstname} Lastname:{Lastname}</p>
          <p>birthday: {doB}</p>
          <p>email:{email}</p>
          <p> PhoneNumber:{PhoneNumber}</p>
        </div>
      </div>
    </Router>
  )
}


export default App
