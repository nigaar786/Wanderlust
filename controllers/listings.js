const Listing=require("../models/listing.js");

const maptilerClient = require("@maptiler/client");// use for geocoding

const mapApiKey =process.env.MAP_API_KEY;

maptilerClient.config.apiKey =mapApiKey;


// Show callback to see the seached Listing on the basis of country================
module.exports.searchedListing=async(req,res)=>{
    const {country} = req.query;

    const searchedListings=await Listing.find({country : {$regex : country, $options: "i"}});


    if(searchedListings.length === 0){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }else{
        res.render("./listings/index.ejs",{allListings:searchedListings});
    }
}


// index callback function================
module.exports.index=async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
};

// Show function for showing categorywise ==============
module.exports.categoryListing = async(req,res)=>{
    const {category} = req.params;

    const searchedListings=await Listing.find({category : {$regex : category, $options: "i"}});


    if(searchedListings.length === 0){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }else{
        res.render("./listings/index.ejs",{allListings:searchedListings});
    }

}


//Render new listing form===============
module.exports.renderNewForm=async(req,res)=>{
    res.render('listings/new.ejs');
};

//Create listing route
module.exports.createListing=async(req,res)=>{
    const result =
        await maptilerClient.geocoding.forward(req.body.listing.location);

    let url=req.file.path;
    let filename=req.file.filename;

    console.log(req.body);
    let listing= await req.body.listing;
    const newListing=new Listing(listing);
    console.log(newListing);

    newListing.owner=req.user._id;
    newListing.image={filename,url};

    newListing.geometry=result.features[0].geometry;

    let savedListing = await newListing.save();

    console.log(savedListing);
    
    req.flash("success","New Listing Created !");
    res.redirect('/listings'); 
};

//Show callback to see the listing===============
module.exports.showListing=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id)
    .populate({
            path: "reviews",
            populate: {
                path: "author"
            }
        })
        .populate("owner");
        
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }else{
        res.render('./listings/show.ejs',{listing});
    }
    
};


//Edit form callback========================
module.exports.renderEditForm=async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }

    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload/", "/upload/h_200,w_250/");
   
    res.render('listings/edit.ejs',{listing, originalImageUrl});   
    
};

//callback to Update the Listing=============
module.exports.updateListing=async(req,res)=>{
    let {id}=req.params;
    
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
   
    
    if(typeof req.file !== "undefined" ){
        let url=req.file.path;
        let filename=req.file.filename;

        listing.image={filename,url};
        await listing.save();
    }
    req.flash("success","Your Listing was Updated !");
    res.redirect('/listings')
};

// delete listing callback====================
module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
    let deletedData=await Listing.findByIdAndDelete(id);
    console.log(deletedData);
    req.flash("success","Your Listing was Deleted !");
    res.redirect('/listings');
};