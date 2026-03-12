import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    // let image_filename = req.file?.filename || "default.jpg";


    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })
    try{
        await food.save();
        res.json({success:true,message:"food added"})
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Errror food not added"})
    }
}

// all food list
const listFood = async (req, res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch(err){
        console.log(err);
        res.json({success:false,message:"Errror food not listed"})
    }
}

// remove food item
const removeFood = async (req, res) =>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"food removed"});
    }catch(err){
        console.log(err);
        res.json({success:false,message:"error removing food"});
    }
}


export {addFood,listFood, removeFood};