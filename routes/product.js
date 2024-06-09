 
 const express = require("express");
const { getAllProducts, getAProduct, addAProduct, updateAProduct, deleteAProduct } = require("../controllers/productControllers");
 const router = express.Router();
 
 router.get('/', getAllProducts )

  router.get('/:productId', getAProduct)

  router.post('/',addAProduct )

  router.put('/:productId',updateAProduct )

  router.delete('/:productId', deleteAProduct)

  module.exports = router