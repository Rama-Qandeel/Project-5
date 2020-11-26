const express = require('express');
const mainRouter = express.Router();
const {addProduct,getproducts,deleteProduct,updateProduct,addStore,updateStore,getStores,deleteStore}=require("../controllers/main-controller")


mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
mainRouter.post('/product', addProduct);
mainRouter.get('/product', getproducts);
mainRouter.delete('/product', deleteProduct);
mainRouter.put('/product', updateProduct);

mainRouter.post('/store', addStore);
mainRouter.put('/store', updateStore);
mainRouter.get('/store', getStores);
mainRouter.delete('/store', deleteStore);


module.exports = mainRouter;