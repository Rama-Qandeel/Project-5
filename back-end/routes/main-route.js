const express = require('express');
const mainRouter = express.Router();
const { addProduct, getproducts, deleteProduct, updateProduct, addStore, updateStore, getStores, deleteStore,
  createItem, deleteItem, createOrder, getItems, getOrders ,deleteOrder,ordersAndUsers} = require("../controllers/main-controller")
const { register, getAllUsers, login ,getUserById,} = require("../controllers/users_controller")

mainRouter.post('/product', addProduct);
mainRouter.get('/product', getproducts);
mainRouter.delete('/product', deleteProduct);
mainRouter.put('/product', updateProduct);

mainRouter.post('/store', addStore);
mainRouter.put('/store', updateStore);
mainRouter.get('/store/:user_id', getStores);
mainRouter.delete('/store', deleteStore);

mainRouter.post('/order', createOrder);
mainRouter.get('/order/:user_id', getOrders);
mainRouter.delete('/order/:order_id', deleteOrder);

mainRouter.post('/item', createItem);
mainRouter.get('/item', getItems);
mainRouter.delete('/item', deleteItem);

mainRouter.post('/register', register);
mainRouter.post('/login', login);
mainRouter.get('/users', getAllUsers);
mainRouter.get('/users/:user_id', getUserById);

mainRouter.get('/usersOrders', ordersAndUsers);


module.exports = mainRouter;
