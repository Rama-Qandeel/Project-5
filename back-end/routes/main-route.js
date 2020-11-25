const express = require('express');
const mainRouter = express.Router();
const {register,login} = require("../controllers/main-controller");



mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});


mainRouter.post("/user/register", register);
mainRouter.post("/user/login", login);
module.exports = mainRouter; 