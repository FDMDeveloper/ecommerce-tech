import mongoose from "mongoose";        

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fmdepalma:sesto280998@cluster0.ezriigi.mongodb.net/prod-del').then(()=>console.log("DB Connected"));
}