const connection = require("../db") 

const addProduct= (req,res)=>{
const {storeId,productName,productDescripition,quantityPerUnit,unitPrice,availableProduct,picture}=req.body
const data = [productName,productDescripition,quantityPerUnit,unitPrice,availableProduct,picture]
const quary = `insert into products (productName,productDescripition,quantityPerUnit,unitPrice,availableProduct,picture)
VALUES (?,?,?,?,?,?) `
connection.query(quary,data,(err,results)=>{
    if (err) {
        console.log(err);
    }  
    console.log(results);
    res.json(results)
})
}
const updateProduct= (req,res)=>{
    const {storeId,productName,productDescripition,quantityPerUnit,unitPrice,availableProduct,picture,productId}=req.body
    const data = [productName,productDescripition,quantityPerUnit,unitPrice,availableProduct,picture,productId]
    const quary = `UPDATE products SET productName=?,productDescripition=?,quantityPerUnit=?,
        unitPrice=?,availableProduct=?,picture=? WHERE productId=${productId} `
    connection.query(quary,data,(err,results)=>{
        if (err) {
            console.log(err);
        }  
        console.log(results);
        res.json(results)
    })
    }
const getproducts= (req,res)=>{
    const quary = `SELECT * from products`
    connection.query(quary,(err,results)=>{
        if (err) {
            console.log(err);
        }  
        console.log(results);
        res.json(results)
    })
    }
    const deleteProduct= (req,res)=>{
        const quary = `delete from products WHERE productId=?`
        const data = [req.body.productId]
        connection.query(quary,data,(err,results)=>{
            if (err) {
                console.log(err);
            }  
            console.log(results);
            res.json(results)
        })
        }

//******************** */
const addStore= (req,res)=>{
    const {storeName,storeCategory,storePic}=req.body
    const data = [storeName,storeCategory,storePic]
    const quary = `insert into store (storeName,storeCategory,storePic)
    VALUES (?,?,?) `
    connection.query(quary,data,(err,results)=>{
        if (err) {
            console.log(err);
        }  
        console.log(results);
        res.json(results)
    })
    }
    
    const updateStore= (req,res)=>{
        const {storeName,storeCategory,storePic,storeId}=req.body
        const data = [storeName,storeCategory,storePic]
        const quary = `UPDATE store SET storeName=?,storeCategory=?,storePic=? WHERE storeId=${storeId} `
        connection.query(quary,data,(err,results)=>{
            if (err) {
                console.log(err);
            }  
            console.log(results);
            res.json(results)
        })
        }
    const getStores= (req,res)=>{
        const quary = `SELECT * from store `
        connection.query(quary,(err,results)=>{
            if (err) {
                console.log(err);
            }  
            console.log(results);
            res.json(results)
        })
        }
        const deleteStore= (req,res)=>{
            const quary = `delete from store WHERE storeId=?`
            const data = [req.body.storeId]
            connection.query(quary,data,(err,results)=>{
                if (err) {
                    console.log(err);
                }  
                console.log(results);
                res.json(results)
            })
            }        
module.exports={addProduct,getproducts,deleteProduct,updateProduct,addStore,updateStore,getStores,deleteStore}