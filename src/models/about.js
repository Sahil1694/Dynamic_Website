const mongoose = require("mongoose")


const about = mongoose.Schema({
    aboutTitle:String,
    briefInfo:String,
});

module.exports = mongoose.model("about",about)