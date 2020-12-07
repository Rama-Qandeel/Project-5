const express = require("express");
const mainRouter = express.Router();
const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  addStore,
  updateStore,
  getStoresbyStoreId,
  getStores,
  deleteStore,
  createItem,
  deleteItem,
  createOrder,
  getItems,
  getOrders,
  getAllStores,
  specificStores.
  deleteOrder,
  ordersAndUsers,
  getproductsByItem
} = require("../controllers/main-controller");
const {
  register,
  getAllUsers,
  login,
  getUserById
} = require("../controllers/users_controller");

mainRouter.post("/product", addProduct);
mainRouter.get('/getproduct/:store_id', getProducts);
mainRouter.delete("/product", deleteProduct);
mainRouter.put("/product", updateProduct);
mainRouter.get('/product/:item_id', getproductsByItem);

mainRouter.post("/store", addStore);
mainRouter.put("/store/:store_id", updateStore);
mainRouter.get('/store/:user_id', getStores);
mainRouter.get('/stores', getAllStores);
mainRouter.post('/specificstore', specificStores);
mainRouter.delete("/store", deleteStore);
mainRouter.get('/mystore/:store_id', getStoresbyStoreId);

mainRouter.post("/item", createItem);
mainRouter.get("/item", getItems);
mainRouter.delete("/item", deleteItem);

mainRouter.post("/register", register);
mainRouter.post("/login", login);
mainRouter.get("/users", getAllUsers);
mainRouter.get('/users/:user_id', getUserById);

mainRouter.post('/order', createOrder);
mainRouter.get('/order/:user_id', getOrders);
mainRouter.delete('/order/:order_id', deleteOrder);
mainRouter.get('/usersOrders/:user_id', ordersAndUsers);

module.exports = mainRouter;
