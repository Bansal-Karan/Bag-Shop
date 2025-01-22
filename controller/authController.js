const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateTokens"); 

module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;

        let user = await userModel.findOne({email: email});
        if(user){
         res.status(401).send("You already have an account, please login!");
         return res.redirect("/");
        }

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) { return res.send(err.message) }
                else {
                    let user = await userModel.create({
                        fullname,
                        email,
                        password: hash,
                    });
                    
                    let token = generateToken(user)
                    res.cookie("token", token)
                    res.render("shop");
                }
            })
        })
    } catch (err) {
        console.log(err.message);
    }
};

module.exports.loginUser = async (req,res) => {
    let {email, password} = req.body;

    let user = await userModel.findOne({email: email});
    if(!user){ res.send("Email or Password is incorrect!");
        return res.redirect("/");
    }

    bcrypt.compare(password, user.password, (err,result) =>{
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/shop")
        }
        else{
            res.send("Email or Password is incorrect!");
            res.redirect("/");
        }
    });
}

module.exports.logout = (req,res)=>{
    res.cookie("token", "");
    res.redirect("/")
}
