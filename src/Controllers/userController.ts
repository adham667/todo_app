import{Request, Response} from "express"
import{getAllusers, getUser, AddUser} from '../Services/userService'
import User from "../Models/user"
import {usertype} from '../Types/userTypes'

const getAllusersController=async(req:Request, res:Response)=>{
    const users =await User.find();
    res.status(200).json({ message: "Success", users });
}

const getUserController = async (req: Request, res: Response) => {
    try {
        const userID = req.params.userID;

        const user = await getUser(userID); 

        if (user) {
            res.json({ Data: user });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error('Error in getUserController:', err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const AddUserController=async(req:Request, res:Response)=>{
    const user = req.body as usertype;
    const addeduser =await AddUser(user);
    res.status(201).json({ message: "Success", addeduser });
}

export {AddUserController, getAllusersController, getUserController};