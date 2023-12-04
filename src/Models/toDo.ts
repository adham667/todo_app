import mongoose from "mongoose";
import User from "./user";

const toDoschema = new mongoose.Schema({
    Title:{
        type:String,
        maxlength:50,
    },
    Description:{
        type:String,
        maxlength:200,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
})