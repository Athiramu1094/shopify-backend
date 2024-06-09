const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    images:[String],//its an array of images
    mainImage:String,
    brand: String,
    title:String,
    price:Number,
    description:String,
    category:{
      type: mongoose.ObjectId,
      ref: 'Category'//model name
    }
  });

  const Product = mongoose.model('Product', productSchema);

  module.exports = Product