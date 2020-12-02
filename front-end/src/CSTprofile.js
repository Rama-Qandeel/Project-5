import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';

const CSTprofile = (props) => {

    const [userId, setUserId] = useState("")
    const [Address, setAddress] = useState("")
    const [Farstname, setFarstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [doB, doBset] = useState("")
    const [email, setEmail] = useState("")
    const [userPic, setUserPic] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Info, setInfo] = useState()
    const [DelevaryName, setDelevaryName] = useState("DelevaryName")
    const [DeleveryUserId, setDeleveryUserId] = useState("Delevaryid")
    const [orders, setOrders] = useState([])
    const [stores, setStores] = useState([])
    const [users, setUsers] = useState([])
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

    const getOrdersInfo = async () => {
        axios
            .get(`http://localhost:5000/usersOrders`)
            .then(async (response) => {
                setOrders(response.data)
            })
            .catch((err) => {
            });
    };
    const getStores = async (infoArgumnt) => {
        axios
            .get(`http://localhost:5000/store/${infoArgumnt}`)
            .then(async (response) => {
                if (response.data.length === 0) {
                    alert("wrong user id")
                }
                console.log(response.data);
                setStores(response.data)
            })
            .catch((err) => {
                console.log('RESULT: ', err);
            });
    };
    const getDelevaryUser = async (infoArgumnt) => {
        console.log(infoArgumnt)
        axios
            .get(`http://localhost:5000/users/${infoArgumnt}`)
            .then(async (response) => {
                console.log("response", response)
                if (response.data.length === 0) {
                    alert("wrong user id")
                }
                setDelevaryName(response.data[0].first_name)
            })
            .catch((err) => {
                console.log('RESULT: ', err);
            });
    };
    const userOrders = orders.map((e, index) =>
        <li num={index + 1} key={index}>
            <div>
                <div>orders_id :{e.orders_id} </div>
                <div>delivary name: {e.first_name} {e.last_name}</div>
                <div>item_id:{e.item_id} </div>
            </div>
        </li>
    )
    const userStores = stores.map((e, index) =>
        <li num={index + 1} key={index}>
            <div>
                <div>store_id :{e.store_id} </div>
                <div>store_name:{e.store_name} </div>
                <div>store_category:{e.store_category} </div>
                <div><img src={e.store_pic} alt="store pic" className="pPic"></img> </div>
            </div>
        </li>
    )

    return (
        <Router>
            <div className="app">
                <h1>{Farstname} profile</h1>

                <button onClick={() => { getOrdersInfo(); getUser(userId); getStores(userId) }} > get user </button>
                <input onChange={(e) => { setUserId(e.target.value) }} placeholder="user id" />
                <div>
                    <img src={userPic} alt="profile pic" className="pPic"></img>
                    <p>Address    :   {Address}</p>
                    <p>First name :{   Farstname}</p> 
                    <p>Last name:{Lastname}</p> 
                    <p>birthday   :   {doB}</p>
                    <p>email   :  {email}</p>
                    <p> Phone Number  :  {PhoneNumber}</p>
                </div>
                <div>
                    <ul>
                        {userOrders}
                    </ul>
                </div>
                <div>
                    <ul>
                        {userStores}
                    </ul>
                </div>
            </div>
        </Router>
    )
}


export default CSTprofile
