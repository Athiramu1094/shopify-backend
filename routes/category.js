const express = require("express");
const { getAllCategories, getACategory, addACategory, updateACategory, deleteACategory } = require("../controllers/categoryControllers");
 const router = express.Router();
 
 router.get('/', getAllCategories )

  router.get('/:categoryId',getACategory )

  router.post('/',addACategory)

  router.put('/:categoryId', updateACategory)

  router.delete('/:categoryId', deleteACategory )

  module.exports = router