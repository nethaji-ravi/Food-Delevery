import mongoose from "mongoose";    

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://NethajiFooddel:45hGV3594TpWe6cW@cluster0.3iznu0a.mongodb.net/food-del').then(()=>console.log("Connected to DB")).catch((err)=>console.log(err));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
