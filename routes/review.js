const express=require("express");
const router=express.Router({mergeParams:true});

const wrapAsync=require("../utils/wrapAsync.js")
const ExpressError=require("../utils/expressError.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const reviewController=require("../controllers/reviews.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require('../middleware.js');




// Reviews Post route====================
router.post('/' ,isLoggedIn,validateReview,wrapAsync(reviewController.postReview));

//Delete Review Route=======================
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;
