const userModel = require("../models/userModel");
const ownerModel = require("../models/ownerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateTokens"); 

module.exports.registerOwner = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;

        let owner = await ownerModel.findOne({email: email});
        if(owner){
         res.status(401).send("You already have an account, please login!");
         return res.redirect("/owner");
        }

        bcrypt.genSalt(10, (err, salt) => {
            
            bcrypt.hash(password, salt, async (err, hash) => {
                console.log(hash);
                if (err) { return res.send(err.message) }
                else {
                    let owner = await ownerModel.create({
                        fullname,
                        email,
                        password: hash,
                    });
                    
                    let token = generateToken(owner)
                    res.cookie("token", token)
                    res.render("shop");
                }
            })
        })
    } catch (err) {
        console.log(err.message);
    }
};

module.exports.loginOwner = async (req,res) => {
    let {email, password} = req.body;

    let owner = await ownerModel.findOne({email: email});
    if(!owner){ res.send("Email or Password is incorrect!");
        return res.redirect("/owner");
    }

    bcrypt.compare(password, owner.password, (err,result) =>{
        if(result){
            let token = generateToken(owner);
            res.cookie("token", token);
            res.redirect("/admin")
        }
        else{
            res.send("Email or Password is incorrect!");
            res.redirect("/owner");
        }
    });
}

module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;

        let user = await userModel.findOne({email: email});
        if(user){
         res.status(401).send("You already have an account, please login!");
         return res.redirect("/user");
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
        return res.redirect("/user");
    }

    bcrypt.compare(password, user.password, (err,result) =>{
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/shop")
        }
        else{
            res.send("Email or Password is incorrect!");
            res.redirect("/user");
        }
    });
}

module.exports.logout = (req,res)=>{
    res.cookie("token", "");
    res.redirect("/")
}
