const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title:{
    type:String,
    required: true,
  },
  description: String,
  image:{
    type: String,
    // filename: String,
    // url: String,
    default://image not provide image-undefined or null
     "https://unsplash.com/photos/cozy-bedroom-with-wood-paneled-walls-and-a-view-0v7DOW9cT_o",

    set: (v)=>//image aahe but link empty
     v=="" ? 
       "https://unsplash.com/photos/cozy-bedroom-with-wood-paneled-walls-and-a-view-0v7DOW9cT_o" 
       : v,

  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;