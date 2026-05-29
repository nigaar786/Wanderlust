const User=require("../models/user.js");

//get signup form for Signup===============
module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
};


//post= submit sign up=================
module.exports.signup=async(req,res)=>{
    try{
        let {username, email, password}=req.body;
        const newUser=new User({email, username});
        const registeredUser= await User.register(newUser,password);
        console.log(registeredUser);

        req.login(registeredUser, (err)=>{  //using passport login method
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to wanderlust!");
            res.redirect("/listings");
        });
       
    }catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};


//GET request for login form==============
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
};


//post request for the authenticate user=========================
module.exports.login=async (req, res) => {
    req.flash("success", "Welcome back to WanderLust! You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

// for logout=======================
module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out");
        res.redirect("/listings");
    });
};