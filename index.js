const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const product = require ("./routes/product")
const category = require("./routes/category")
const userRoutes =require("./routes/userRoutes")
const port = 3000

app.use(cors())
app.use(express.json())//This middleware processes all incoming requests with JSON data.When a POST request is made with a JSON body, the data is available in req.body.
app.use("/products", product)
app.use("/categories", category)
app.use("/users", userRoutes )



main()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://krishna6athi:p9qmEHeUQXlKuteE@cluster0.kbbduxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

