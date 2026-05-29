const express=require("express");
const router=express.Router();

const Listing=require('../models/listing.js');
const wrapAsync=require("../utils/wrapAsync.js")
const {isLoggedIn,isOwner,validateListing}=require('../middleware.js');

const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});



// index route=================
router.route("/")
.get(wrapAsync(listingController.index)) // index route=================
 .post(isLoggedIn, validateListing,       // Create Route===============
    upload.single('listing[image][url]'),
    wrapAsync(listingController.createListing)
); 


// Search Listing Route ===================
router.get("/search",wrapAsync(listingController.searchedListing));

// Search on the basis of categories==================
router.get("/category/:category",wrapAsync(listingController.categoryListing));

// New Route======================
router.get('/new',isLoggedIn,wrapAsync(listingController.renderNewForm));

router.route("/:id")
.get(wrapAsync(listingController.showListing)) //show Route to see data of individual listing==================
.put(isLoggedIn,isOwner,
    upload.single('listing[image][url]'),
    validateListing,
    wrapAsync(listingController.updateListing))//update route===================
.delete(isLoggedIn,
    isOwner,wrapAsync(listingController.destroyListing));//delete route======================

//Edit Route=========================
router.get('/:id/edit',isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));


module.exports=router;