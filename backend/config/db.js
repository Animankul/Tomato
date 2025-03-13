import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://anish:anish@food-del.n8vr6.mongodb.net/Food-del').then(()=>console.log("DB Connected"));
}