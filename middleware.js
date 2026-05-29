const Listing=require("./models/listing");
const ExpressError=require("./utils/expressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");
const Review=require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        console.log(req.originalUrl);
        // POST request ke liye referer save karo (listing detail page)
        if (req.method === "POST") {
            let referer = req.get("Referer");

            console.log( referer );
            req.session.redirectUrl = referer || "/listings";
        } else {
            req.session.redirectUrl = req.originalUrl;
        }
        req.flash("error", "You must be logged in");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;   // pehle session se locals mein save karo
        console.log(res.locals.redirectUrl);
    }
    next();
};

module.exports.isOwner=async (req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);

    if(!res.locals.currUser._id.equals(listing.owner._id)){
        req.flash("error", "You don't have the access");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//SchemaValidation middleware for listingSchema=============
module.exports.validateListing=((req,res,next)=>{
    let {error}= listingSchema.validate(req.body);
    
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
});

//SchemaValidation middleware for reviewSchema==================
module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);

    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//review Author middleware for delete the perticular review=================
module.exports.isReviewAuthor=async (req,res,next)=>{
    let {id,reviewId}=req.params;
    let review=await Review.findById(reviewId);

    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "You don't have the access");
        return res.redirect(`/listings/${id}`);
    }
    next();
};
