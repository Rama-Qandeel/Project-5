import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
// import  'bootstrap';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
const StoreProfile = (props) => {
    const { id } = props.match.params
    const [userStore, setStore] = useState(["store"])
    const [storeId, setStoreId] = useState(id)
    const getStorebyid = async (infoArgumnt) => {
        axios
            .get(`http://localhost:5000/mystore/${infoArgumnt}`)
            .then(async (response) => {
                setStore(response.data[0])
            })
            .catch((err) => {
                throw err
            });
    };
    useEffect(() => {
        getStorebyid(storeId)
    },[])
    return (
        <Router>
            <div>
                <div className="list-group-item list-group-item-action">
                    <h1 className="bg-info" >store id :{userStore.store_id}</h1>
                    <div>store name :   {userStore.store_name} </div>
                    <div>store category :   {userStore.store_category} </div>
                    <div><img src={userStore.store_pic} alt="store pic" className="pPic"></img> </div>
                </div>

            </div>
        </Router>
    )
}


export default StoreProfile
