import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import Store from "./Store";
import { Link } from "react-router-dom";
import axios from "axios";
const Home=()=> {
const [stores,setStores]=useState([])
       
    const getAllStores=()=>{
        axios.get("http://localhost:5000/allstore")
        .then(response=>{
            setStores(response.data)
        }).catch((error) => {
            console.log("error :", error);
          });
    }
    
   useEffect(() => {
    getAllStores()
   }, []) 
    
   const renderStores = stores.map((store) => (
    <Link
      className="link"
      to={{
        pathname: "/info",
        state: store,
      }}
      style={{ textDecoration: "none" }}
    >
      <Store data={store} />
    </Link>
  ));
   
   
   
   return (
            <div>
               <div className="store-container">{renderStores}</div>
            </div>
        )
    
}

export default Home