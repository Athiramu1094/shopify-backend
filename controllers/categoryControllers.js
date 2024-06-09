const Category = require("../model/categoryModel");

const getAllCategories = async    (req, res) => {
   try 
   {const categories = await Category.find({});
    res.json(categories)}
   
    catch(error){
      res.status(404).send('category not found')

    }
  }

const getACategory = async (req, res) => {
 try{
  const category= await Category.findById(req.params.categoryId).exec();
  res.json(category)
 }
 catch(error){
  res.status(404).send('category not found')
 }
  }

const addACategory = async  (req, res) => {
    console.log(req.body)//debug the data being sent to your server(the json body written in postman)
    const categoryData = req.body
    const category = new Category(categoryData); //code for adding new category and Category in new Category is model name.here Category is model.
    console.log(category)//now we gt a category id
    await category.save();
    res.json(category)
  }

const updateACategory =  async (req, res) => {
try{
  const updatedCategory = await Category.findByIdAndUpdate(req.params.categoryId,  req.body ,{new:true})
    res.json(updatedCategory)
  }
  catch(error){
    res.status(404).send('category not found')

  }
}

const deleteACategory = async (req, res) => {
  try{
    await Category.findByIdAndDelete(req.params.categoryId)
    res.status(200).send('Deleted')
  }

  catch{
    res.status(404).send('category not found')
  }
  }

module.exports = {
    getAllCategories,
    getACategory,
    addACategory,
    updateACategory,
    deleteACategory
}