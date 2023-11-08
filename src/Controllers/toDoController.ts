import{Request, Response} from "express"
import {addTask, getAllTasks, getUserTask} from '../Services/toDoService'
import { task } from "../Types/taskTypes"

const getAllTasksController=(req:Request, res:Response)=>{
    const tasks = getAllTasks();

    res.json(tasks);
}

const getUserTaskContorller=(req:Request, res:Response)=>{
    const userID = +req.params.userID;
    getUserTask(userID)
    .then((task)=>{
        res.json(task);
    })
    .catch((err)=>{
        res.status(400).json(err.message);
    })
}

const addTaskController=(req:Request, res:Response)=>{
    const task = req.body as task;

    addTask(task)
    .then((msg)=>{
    })
    .catch((err)=>{
        console.error(err);
    })
    

    res.end()
}


export{getAllTasksController, getUserTaskContorller, addTaskController};