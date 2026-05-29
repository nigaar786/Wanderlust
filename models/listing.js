const mongoose = require('mongoose');
const Review=require("./review.js");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },

        url:{
            type: String,
            default:"https://tse4.mm.bing.net/th/id/OIP.NSoB_kaSbqwjkrpXmzqbcwHaGv?rs=1&pid=ImgDetMain&o=7&rm=3",
            set: (v) => v === "" ? "https://tse4.mm.bing.net/th/id/OIP.NSoB_kaSbqwjkrpXmzqbcwHaGv?rs=1&pid=ImgDetMain&o=7&rm=3" : v,
       },
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    geometry:{
        type:{
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category:{
        type:String,
        enum:["Trendings","Rooms","Cities","Mountains","Castles","Pool","Camping","Farms","Arctic","Boats"]
    }
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in : listing.reviews}});
    }
    
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;