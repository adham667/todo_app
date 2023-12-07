import { Response, Request } from "express";
import User from "../Models/user";
import { ObjectId } from "mongoose";
import {usertype} from "../Types/userTypes";

const AddUser = async (user: usertype) => {
    try {
        const addedUser = await User.create(user);
        return addedUser;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error; // Propagate the error so it can be handled by the caller
    }
};


const getAllusers=async()=>{
    const users = await User.find();
    return users;
}

const getUser = async (filter:String) => {
    return await User.findById(filter).exec();
};



export {getAllusers, getUser, AddUser};