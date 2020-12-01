import Axios from 'axios'
import React, { useState,useEffect } from 'react'
import Store from "./Store";
import { Link } from "react-router-dom";
import axios from "axios";
const Home=()=> {
let [stores,setStores]=useState([])
const [specificStores,setSpecificStores]=useState([])
      
    const getAllStores=()=>{
        axios.get("http://localhost:5000/allstore")
        .then(response=>{
            setStores(response.data)
        }).catch((error) => {
            console.log("error :", error);
          });
    }
    const getSpecificStores= (e)=>{
    //   console.log('e :',e.target.name);
   
      
  let data={store_category:e.target.name}
        
      
      axios.post("http://localhost:5000/specificstore",data)
       
          
        .then( response=>{
            console.log('response',response);
            console.log('e :',data);

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
             <div className="store-category"> 
              <button name="Groceries" onClick={getSpecificStores}>
              Groceries
            </button>
            <button name="Bakery" onClick={getSpecificStores}>
            Bakery
            </button>
            <button name="Coffee" onClick={getSpecificStores} >
            Coffee
            </button>
            </div>
               <div className="store-container">{renderStores}</div>
            </div>
        )
    
}

export default Home