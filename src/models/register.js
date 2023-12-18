const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    Address:{
        type: String,
        required:true
    },
    Gender:{
        type: String,
        required:true
    },
    state:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    
    phone:{
        type: Number,
        required:true,
        unique:true,
    },
    collegeName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    confirmPass:{
        type: String,
        required:true
    }
})

const Register = new mongoose.model("Register",studentSchema);

module.exports = Register;
