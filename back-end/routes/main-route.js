const express = require('express');
const mainRouter = express.Router();
const {register,login} = require("../controllers/main-controller");
const{verifyToken}=require("../middlewares/404")


mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});


mainRouter.post("/user/register", register);
mainRouter.post("/user/login", login);
mainRouter.get("/user/protected",protected)
module.exports = mainRouter; 