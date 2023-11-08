import{Request, Response} from "express"
import{getAllusers, getUser, AddUser} from '../Services/userService'
import {user} from '../Types/userTypes'

const getAllusersController=(req:Request, res:Response)=>{
    const users = getAllusers();
    res.json({Data:users});
}

const getUserController=(req:Request, res:Response)=>{
    const userID = +req.params.userID
    getUser(userID)
    .then((user)=>{
        res.json({Data:user});
    })
    .catch((err)=>{
        res.status(400).json(err.message);
    })

}

const AddUserController=(req:Request, res:Response)=>{
    const user = req.body as user;
    AddUser(user);
    res.end()
}

export {AddUserController, getAllusersController, getUserController};