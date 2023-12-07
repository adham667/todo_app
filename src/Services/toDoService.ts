import toDo from "../Models/toDo"
import mongoose from "mongoose";
import User from "../Models/user";
import { tasktype } from "../Types/taskTypes";

const addTask=async(task:tasktype)=>{
    return new Promise((reslove, reject)=>{
        setTimeout(async() => {
            if(await User.exists(task.UserId)){
                toDo.create(task);
                reslove("task added successfully");
            }
            else{
                reject(new Error("user doesn't exist"))
            }
        }, 2000);
    })
}

const getUserTask=async(UserId:String)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(async() => {
            try {
                const userExists = await User.exists({ _id: UserId });

                if (userExists) {
                    const userTasks = await toDo.find({
                        user: UserId
                    });
                    resolve(userTasks);
                } else {
                    reject(new Error("User doesn't exist"));
                }
            } catch (error) {
                reject(error);
            }
        }, 2000);
    })
}

const getAllTasks=()=>{
    const tasks = toDo.find();
    return tasks;
}

export{addTask, getAllTasks, getUserTask};