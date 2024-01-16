const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require('bcrypt'); // secure user password
require('dotenv').config();

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
const username = process.env.mongodb_username;
const password = process.env.mongodb_password;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.g9uwwfh.mongodb.net/mern-choco-ecommerce`);

// Express server
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Creating Upload Endpoint for images
app.use(`/images`,express.static('upload/images'))

app.post("/upload", upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for Creating Products
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})

// Add Product
app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({}); 
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id:id, 
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Remove Product
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// Get all Products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetached");
    res.send(products);
})

// Shema creating for User model
const Users = mongoose.model("Users",{
    name:{
        type:String,    
    },
    email:{ // check if we need this
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// SignUp 
app.post("/signup",async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false,errors:"email has been registered"})
    }

    // If the user not register before, will create a cart
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0;
    }

    // Hash the password being saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // user will be created
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:hashedPassword,
        cartData:cart,
    })

    // user save 
    await user.save();

    // data
    const data = {
        user:{
            id:user.id
        }
    }

    // jwt sign method to encypted the token
    const token = jwt.sign(data,"secret_ecom");
    res.json({success:true,token})

})

// Creating endpoint for user login
app.post("/login", async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        // Compare hashed password
        const passCompare = await bcrypt.compare(req.body.password, user.password);
        // Check if password is correct
        if (passCompare) {
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,"secret_ecom");
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

// check the server connection 
app.listen(port,(error)=>{
    if (!error) {
        console.log("Server Running on Port "+port)
    }
    else
    {
        console.log("Error : "+error)
    }
})

