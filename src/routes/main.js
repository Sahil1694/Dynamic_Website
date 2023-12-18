const express = require('express')
const { route } = require('express/lib/application')
const Detail = require("../models/Detail");
const slider = require('../models/slider');
const Sevices = require("../models/service");
const Contact = require("../models/contact");
const about = require('../models/about');
const Register = require("../models/register")

const routes = express.Router();

routes.get("/", async (req,res) =>{
    const details = await Detail.findOne({"_id":"650bef160f4ee5d182afdfcf"})
    const slides = await slider.find()
    const services = await Sevices.find()
    const abouts = await about.find()
    console.log(abouts)
     res.render("index",{
        details:details,
        slides:slides,
        services:services,
        abouts:abouts
    })
})

routes.get("/gallery", async (req,res) =>{
    const details = await Detail.findOne({"_id":"650bef160f4ee5d182afdfcf"})
     
    res.render("gallery",{
        details:details,
    })
});

routes.get("/register", async (req,res) =>{
    const details = await Detail.findOne({"_id":"650bef160f4ee5d182afdfcf"})
     
    res.render("register",{
        details:details,
    });
    });

    
routes.post("/register", async(req,res) =>{
    try{
       const password =req.body.password;
       const cpassword = req.body.confirmPass;

       if(password === cpassword){
        console.log("corret pass")
          const studentRegister = new Register({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            Address:req.body.Address,
        //     // Gender: req.body.Gender,
        //     // state: req.body.state,
        //     // city: req.body.city,
            phone:req.body.phone,
            collegeName:req.body.collegeName,
            email:req.body.email,
            password:password,
            confirmPass:cpassword,
          })
            const registered = await studentRegister.save();
            console.log(registered)
            res.render("index");
       }else{
        console.log("error")
        res.send("Password daes Not Match")
       }
    }catch(error){
        res.status(400).send(error)
        console.log(error)
    }
});

routes.get("/login", async (req,res) =>{
    const details = await Detail.findOne({"_id":"650bef160f4ee5d182afdfcf"})
     
    res.render("login",{
        details:details,
    });
});



routes.post("/login",async(req,res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        //reading and checking data
        const usermail = await Register.findOne({email:email})

        if(usermail.password === password){
            res.status(201).render("index")
        }else{
            res.send("Invalid Log in detail")
        }         
    }catch(e){
        console.log(e)
    }
})

routes.post("/process-contact-form" ,async(request,response)=>{
    console.log("form is submitted")
    console.log(request.body)

    //save the data
    try{
       const data =await Contact.create(request.body)
       console.log(data)
       response.redirect("/")
    }catch(e){
        console.log(e)
        response.redirect("/")
    }
})




module.exports = routes;