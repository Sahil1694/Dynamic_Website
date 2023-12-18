const express = require("express")
const port = process.env.PORT || 8080;
const hbs = require("hbs")
const { request } = require("http")
const app = express()
const routes = require('./routes/main')
const mongoose = require('mongoose')
const Detail = require("./models/Detail")
const Slider = require("./models/slider")
const Service = require("./models/service")
const about = require("./models/about")
const register = require("./models/register")
const bodyParser = require("body-parser")



// db connectivity
const dbconnection=require('./database/connect')
dbconnection.then(()=>{
    app.listen(port,()=>{
        console.log("Server started & DB Connected")
    })
     
     //creating About Sec in Db
    //  about.create([
    //     {
    //         aboutTitle:"About Our Site",
    //         briefInfo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati quos nesciunt ab est! Ut tenetur, consequuntur neque expedita eveniet exercitationem culpa impedit ratione in maxime, perspiciatis vitae ea totam?",
    //     },
    //  ])
    //creating service section in DB
    //  Service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Hostels',
    //         description:'Under Construction !!!',
    //         linkText:'https://www.youtube.com/watch?v=sb4ErNCgA4U&list=PL0zysOflRCekyNGMYAWPeaHsUDMpoQ8jh&index=10&ab_channel=LearnCodeWithDurgesh',
    //         link:'check',
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Hostels',
    //         description:'Under Construction !!!',
    //         linkText:'https://www.youtube.com/watch?v=sb4ErNCgA4U&list=PL0zysOflRCekyNGMYAWPeaHsUDMpoQ8jh&index=10&ab_channel=LearnCodeWithDurgesh',
    //         link:'check',
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Hostels',
    //         description:'Under Construction !!!',
    //         linkText:'https://www.youtube.com/watch?v=sb4ErNCgA4U&list=PL0zysOflRCekyNGMYAWPeaHsUDMpoQ8jh&index=10&ab_channel=LearnCodeWithDurgesh',
    //         link:'check',
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Hostels',
    //         description:'Under Construction !!!',
    //         linkText:'https://www.youtube.com/watch?v=sb4ErNCgA4U&list=PL0zysOflRCekyNGMYAWPeaHsUDMpoQ8jh&index=10&ab_channel=LearnCodeWithDurgesh',
    //         link:'check',
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Hostels',
    //         description:'Under Construction !!!',
    //         linkText:'https://www.youtube.com/watch?v=sb4ErNCgA4U&list=PL0zysOflRCekyNGMYAWPeaHsUDMpoQ8jh&index=10&ab_channel=LearnCodeWithDurgesh',
    //         link:'check',
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Hostels',
    //         description:'Under Construction !!!',
    //         linkText:'https://www.youtube.com/watch?v=sb4ErNCgA4U&list=PL0zysOflRCekyNGMYAWPeaHsUDMpoQ8jh&index=10&ab_channel=LearnCodeWithDurgesh',
    //         link:'check',
    //     },



    //  ])

    //creting Slider in DB
    // Slider.create([
    //     {
    //         title:"learn java in Easy Way",
    //         subTitle:"Java is one of the most popular languague",
    //         imageUrl:"/static/images/h1.png"

    //     },
    //     {
    //         title:"learn java in Easy Way",
    //         subTitle:"Java is one of the most popular languague",
    //         imageUrl:"/static/images/h1.png"

    //     },
    //     {
    //         title:"learn java in Easy Way",
    //         subTitle:"Java is one of the most popular languague",
    //         imageUrl:"/static/images/h1.png"

    //     },
    // ])
     //creting Detail Schema in DB
    // Detail.create({
    //             brandName:"HOSTAFE",
    //             brandIconUrl:"https://play-lh.googleusercontent.com/kyQyI5S3k-GtHbSkl1xTlsduwj4iISVl7ARmn3gYy8rVRzVIZAFB-uoPpGYTADuVa3ay",
    //             links:[{
    //                 label:"Home",
    //                 url:"/"
    //             },
    //             {
    //                 label:"Sevices",
    //                 url:"/services",
    //             },
    //             {
    //                 label:"Gallery",
    //                 url:"/gallery"
    //             },
    //             {
    //                 label:"About",
    //                 url:"/about"
    //             },
    //             {
    //                 label:"Contact Us",
    //                 url:"/contact-us"
    //             }
    //         ]
    //     })
}).catch((error)=>{
    console.log("Problem to connect")
    console.log(error)
})
 
app.use('/static',express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true,
}));
app.use('/' , routes)
app.use(express.json());
app.use(express.urlencoded({
    extended:false,
}))

//template engine hbs
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

