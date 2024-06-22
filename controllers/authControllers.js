const bcrypt = require('bcrypt');
const User = require("../model/userModel")
const jwt = require('jsonwebtoken')


const login = async (req,res)=>{
    //console.log("hello") to check if its running when testing with postman during error occurs
    //1.get email and password from req.body
    const {email,password} = req.body
    //2.find user with given email in database
    const user = await User.findOne({
        email:email
    })

    if(!user){
        return res.status(401).send("User not found")
    }
    //3.compare passwords(bcrypt-checkpassword)
    const passwordsMatch = bcrypt.compareSync(password, user.password) //user.password is the name we gave to our hash that is saved in backend.
    
    //4.send a response
    if(passwordsMatch){
        var token = jwt.sign({_id:user._id, email:user.email }, '2d970c3dbb116832bf43ffba0cb3062ff5935513f7a3e4b78bd8e300a23ad4afb7683361fc16c212ede4005d00fe3265f8c3275733552249b03dd2c85be2ac44',
             {expiresIn:'1h'});
        res.cookie('token', token)
        res.send("Login success")
    }

    else{
        return res.status(401).send("Password does not match")
    
    }
}

//check token is there in request
const verifyLogin = async(req, res) =>{
    if(req.cookies.token){
        res.send("logged in")
    }
    else{
        res.status(401).send("Unauthorized access!")
    }

}

const logout = async(req, res)=>{
    res.clearCookie('token')
    res.send("Logged out")

}



module.exports ={
    login,
    verifyLogin,
    logout
}