const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController = require("../controllers/users.js");


router.route("/signup")
.get(userController.renderSignupForm) //get signup form for Signup=====
.post(userController.signup); //post= submit sign up====



router.route("/login")
.get(userController.renderLoginForm) //GET request for login form============
.post(saveRedirectUrl,                              
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.login
); //post request for the authenticate user=====


// for logout=======================
router.get("/logout",userController.logout);

module.exports=router;