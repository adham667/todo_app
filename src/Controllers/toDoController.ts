import {Request, Response} from "express"
import {addTask, getAllTasks, getUserTask} from '../Services/toDoService'
import { tasktype } from "../Types/taskTypes"

const getAllTasksController=(req:Request, res:Response)=>{
    const tasks = getAllTasks();

    res.json(tasks);
}

const getUserTaskContorller=async(req:Request, res:Response)=>{
    try{
        const userID = req.params.userID;
    const tasks =await getUserTask(userID)
    if(tasks){
        res.json({Data:tasks})
    }
    else{
        res.status(404).json({message:"user not found"});
    }
    }
    catch (err) {
        console.error('Error in getUserController:', err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const addTaskController=(req:Request, res:Response)=>{
    const task = req.body as tasktype;

    const addedtask = addTask(task);
    res.status(201).json({ message: "Success"});
}


export{getAllTasksController, getUserTaskContorller, addTaskController};