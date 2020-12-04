const express = require("express");
const mainRouter = express.Router();
const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  addStore,
  updateStore,
  getStores,
  deleteStore,
  createItem,
  deleteItem,
  createOrder,
  getItems,
  getOrders,
  getAllStores,
  specificStores
} = require("../controllers/main-controller");
const {
  register,
  getAllUsers,
  login,
} = require("../controllers/users_controller");

mainRouter.post("/product", addProduct);
mainRouter.get('/getproduct/:store_id', getProducts);
mainRouter.delete("/product", deleteProduct);
mainRouter.put("/product", updateProduct);
mainRouter.post("/store", addStore);
mainRouter.put("/store/:store_id", updateStore);
mainRouter.get("/store", getStores);
mainRouter.get('/stores', getAllStores);
mainRouter.post('/specificstore', specificStores);
mainRouter.delete("/store", deleteStore);
mainRouter.post("/order", createOrder);
mainRouter.get("/orders", getOrders);
mainRouter.delete("/order", deleteStore);
mainRouter.post("/item", createItem);
mainRouter.get("/item", getItems);
mainRouter.delete("/item", deleteItem);
mainRouter.post("/register", register);
mainRouter.post("/login", login);
mainRouter.get("/users", getAllUsers);

module.exports = mainRouter;
