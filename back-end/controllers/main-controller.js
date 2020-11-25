const connection = require("../db");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();


const register = async (req, res) => {
  const query = `INSERT INTO users (firstName,lastName,birthDate,address,city,region,phoneNumber,email,password,imageProfile,paymentId,roleId,storeId) VALUES (?, ?, ?,?, ?,?,?,?,?,?,?,?,?)`;
  let {firstName,lastName,birthDate,address,city,region,phoneNumber,email,password,imageProfile,paymentId,roleId,storeId} = req.body;
  password = await bcrypt.hashSync(password, Number(process.env.SALT));
  const data = [firstName,lastName,birthDate,address,city,region,phoneNumber,email,password,imageProfile,paymentId,roleId,storeId];
  connection.query(query, data, (err, result) => {  
    if (err) { 
      res.json(err);
    }
   res.json("Succesfully! Your account has been created.");
  });
};  

const login = (req, res) => {
    const query = `SELECT * ,role.type FROM role INNER JOIN users ON 
    users.roleId=role.roleId WHERE email=? `;
    const { email, password } = req.body;
    const data = [email, password];
    connection.query(query, data, async (err, result) => {
      if (err) throw err;
      // console.log("result :", result[0]);
      if (result.length) {
        if (await bcrypt.compare(password, result[0].password)) {
          const {
            userId,
            type,
            email,
            firstName,
            lastName, 
            address,
            city,
            birthDate,
            phoneNumber,
          } = result[0];
          const payload = {
            userId,
            type,
            email,
            firstName,
            lastName,
            address,
            city,
            birthDate,
            phoneNumber,
          };
  
          const options = {
            expiresIn: process.env.TOKEN_EXPIRATION,
          };
  
          const token = jwt.sign(payload, process.env.SECRET, options);
          res.json(token);
        } else {
          // res.status(422);
          res.json({ error: "Invalid login check your password" });
        }
      } else {
        // res.status(404);
        res.json({ error: "Invalid login check your email" });
      }
    });
  };




module.exports = {
  register,
  login
}
