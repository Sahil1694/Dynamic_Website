const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Detail = new Schema({
    brandName: String,
    brandIconUrl: String,
    links:[
    {
        label:String,
        url:String,  
    },
   ]
    
});

module.exports= mongoose.model("detail",Detail)