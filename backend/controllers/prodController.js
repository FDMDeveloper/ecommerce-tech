import { log } from "console";
import prodModel from "../models/prodModel.js";
import fs from 'fs'

// add prod item
const addProduct = async (req,res) => {

    let image_filename = `${req.file.filename}`;


    const prod = new prodModel({
        name: req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await prod.save();
        res.json({success:true,message:"Prod Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all prod list
const listProd = async (req,res) =>{
    try {
        const products = await prodModel.find({});
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove prod item
const removeProd= async (req,res) => {
    try {
        const prod = await prodModel.findById(req.body.id);
        fs.unlink(`uploads/${prod.image}`,()=>{})

        await prodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {addProduct,listProd,removeProd}