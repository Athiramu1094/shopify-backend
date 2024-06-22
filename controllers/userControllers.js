const User = require("../model/userModel");
const bcrypt = require('bcrypt');  //import bcrypt from npm after installation.
const saltRounds = 10; //

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(404).send('User not found');
  }
};

const getAUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).exec();
    res.json(user);
  } catch (error) {
    res.status(404).send('User not found');
  }
};

const addAUser = async (req, res) => {
  console.log(req.body); // debug the data being sent to your server (the JSON body written in Postman)
  const userData = req.body; //data from form
  const hash  = bcrypt.hashSync(userData.password, saltRounds); //we get password from userData.encrypted password
  //const user = new User(userData); // code for adding a new user and User is the model name. Here User is the model.
  const user  = new User({
    ...userData,
    password:hash
  })//made some changes for password encryption.user contain all details including plaintextpassword.so made a copy and password is given as hash,the encrypted password.
    console.log(user); // now we get a user id
  await user.save();
  res.json(user);
};

const updateAUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(404).send('User not found');
  }
};

const deleteAUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).send('Deleted');
  } catch {
    res.status(404).send('User not found');
  }
};

module.exports = {
  getAllUsers,
  getAUser,
  addAUser,
  updateAUser,
  deleteAUser
};
