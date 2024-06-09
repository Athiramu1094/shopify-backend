const Product = require("../model/productModel");

const getAllProducts = async (req, res) => {
 try{

  //http://localhost:3000/products?category=565456456&price[lt]=1800&sort=price(for example this is our filter,sort,limit req in postman,but we need only filter in it)
  //1.removing fields other than filtering(sorting,limiting)
  //2.const req.query = {...req.query}copying object for removing
  //3.const fieldToDelete = ['limit', 'sort', 'select']
  //4.fieldToDelete.forEach(field =>{
    //delete reqQuery[field]
  //})
  //console.log(reqQuery)
 
  //let queryString = JSON.stringify(reqQuery);//to convert a object to a JSON string(for advanced filtering like price)
  //queryString = queryString.replace(/"(\b(?:lt|gt|lte|gte)\b)":/g, '"$$$1":');
 // console.log(queryString)
 // const filterObject = json.parse(queryString)//to convert back to json
  //const products = await product.find (filterObject).sort().limit()  (here gets filter only)
  //const query = product.find(filterObject)  (products needs to change and new code has to written)

  //sorting(if sorting is give by the user so write if condition code and to test give any sorting in postman and console it)
  //if(req.query.sorting){
      //console.log(req.query.sort)
      //query.sort(req.query.sort)
  //}

  //const products =await query.exec()

  //if (req.query.select){
    //const spaceSeparatedString = commaSeparatedString.replace(/,/g, ' '); (rewrite the code with our names)
    //const selectString = req.query.select.replace(/,/g, ' ');
    //query.select(selectString)
  //}


  //if (req.query.limit){
//query.limit(req.query.limit)
  //}

  



  const products = await Product.find(req.query);//for filtering with category id
  res.json(products)
}
catch(error){
  res.status(404).send('product not found')
}
 }

const getAProduct= async (req, res) => {
  try{
    const product = await Product.findById(req.params.productId).exec();
   res.json(product)
  }
  catch(error){
    res.status(400).send('product not found')
  }
}

const addAProduct = async (req, res) => {
  console.log(req.body)
  const productData = req.body
  const product = new Product(productData); 
  console.log(product)
  await product.save();
  res.json(product)
}
  

const updateAProduct = async (req, res) => {
  try{
    const updatedProduct =await Product.findByIdAndUpdate(req.params.productId,  req.body , {new:true})
      res.json(updatedProduct)
    }
    catch(error){
      res.status(404).send('product not found')
  
    }
  
  }

const deleteAProduct = async (req, res) => {
  try{
    await Product.findByIdAndDelete(req.params.productId)
    res.status(200).send('Deleted')
  }

  catch{
    res.status(404).send('product not found')
  }
  }

  module.exports= {
    getAllProducts,
    getAProduct,
    addAProduct,
    updateAProduct,
    deleteAProduct
  }